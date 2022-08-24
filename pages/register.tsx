import { NextPage } from "next";
import { Box, Heading, Input, Text } from "@chakra-ui/react";
import React, { HTMLInputTypeAttribute, useEffect, useState } from "react";
import { ButtonComp, Card, ContainerAuth, HeadComp, LayoutRoot } from "../src/components";
import { useAuth } from "../src/context/Auth";
import Link from "next/link";
import Swal from "sweetalert2";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

interface InputItem {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  name: string;
  value: string;
}

const Register: NextPage = () => {
  const auth = getAuth();

  const [inputs, setInputs] = useState<InputItem[]>([
    { type: "email", placeholder: "Email", name: "email", value: "" },
    { type: "password", placeholder: "Password", name: "password", value: "" },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    const newInputs = inputs.map((input) => {
      if (input.name === name) return { ...input, value };
      return { ...input };
    });

    setInputs(newInputs);
  };

  const resetInputs = (): void => {
    setInputs([
      { type: "text", placeholder: "Username", name: "username", value: "" },
      { type: "email", placeholder: "Email", name: "email", value: "" },
      { type: "password", placeholder: "Password", name: "password", value: "" },
    ]);
  };

  const promptRegisterError = (): void => {
    Swal.fire({
      icon: "error",
      title: "Oopss..",
      text: "Email sudah digunakan.",
    });
  };

  const promptRegisterSuccess = () => {
    Swal.fire({
      icon: "success",
      title: "Berhasil Register",
      text: "Silahkan login dengan email yang sudah didaftarkan.",
    });
  };

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, inputs[0].value, inputs[1].value)
      .then((userCredential) => {
        promptRegisterSuccess();
        resetInputs();
      })
      .catch((error) => {
        promptRegisterError();
      });
  };

  return (
    <div>
      <HeadComp title="Register" />
      <LayoutRoot>
        <ContainerAuth>
          <Heading fontSize={20}>Register</Heading>
          <form onSubmit={handleSubmit}>
            {inputs.map((input, idx) => (
              <Input
                key={idx}
                borderColor="gray.300"
                my={2}
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                value={input.value}
                onChange={(e) => handleChange(e)}
                autoComplete="off"
                required
              />
            ))}
            <ButtonComp variant="primary" width="100%" type="submit" my={2}>
              Register
            </ButtonComp>
            <Text textAlign="center">
              Sudah punya akun? Login{" "}
              <Link href="/login">
                <a>
                  <Box as="span" color="primary.normal">
                    disini
                  </Box>
                </a>
              </Link>
            </Text>
          </form>
        </ContainerAuth>
      </LayoutRoot>
    </div>
  );
};

export default Register;
