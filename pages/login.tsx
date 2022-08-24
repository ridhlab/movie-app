import { Box, Heading, Input, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import { HTMLInputTypeAttribute, useEffect, useState } from "react";
import { ButtonComp, ContainerAuth, HeadComp, LayoutRoot } from "../src/components";
import GoogleLogo from "../src/assets/img/google.png";
import GithubLogo from "../src/assets/img/github.webp";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useAuth } from "../src/context/Auth";
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { googleProvider, githubProvider } from "../src/services/firebase/init";

interface InputItem {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  name: string;
  value: string;
}

const Login: NextPage = () => {
  const { setIsLogin } = useAuth();

  const auth = getAuth();

  const router = useRouter();

  const [inputs, setInputs] = useState<InputItem[]>([
    { type: "email", placeholder: "Email", name: "identifier", value: "" },
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

  const prompLoginError = (): void => {
    Swal.fire({
      icon: "error",
      title: "Oopss..",
      text: "Email atau password Anda salah!!!",
    });
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, inputs[0].value, inputs[1].value)
      .then((userCredential: any) => {
        const _token = userCredential.user.accessToken;
        localStorage.setItem("token", _token);
        setIsLogin(true);
        router.push("/");
      })
      .catch((error) => {
        prompLoginError();
      });
  };

  const loginProvider = (_provider: any): void => {
    signInWithPopup(auth, _provider)
      .then((userCredential: any) => {
        localStorage.setItem("token", userCredential.user.accessToken);
        setIsLogin(true);
        router.push("/");
      })
      .catch((error) => {
        throw error;
      });
  };

  const handleLoginWithGoogle = (): void => {
    loginProvider(googleProvider);
  };

  const handleLoginWithGithub = (): void => {
    loginProvider(githubProvider);
  };

  return (
    <div>
      <HeadComp title="Login" />
      <LayoutRoot>
        <ContainerAuth>
          <Heading fontSize={20}>Login</Heading>
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
            <ButtonComp variant="primary" width="full" my={2} type="submit">
              Login
            </ButtonComp>
            <ButtonComp variant="secondary" width="full" my={2} onClick={() => handleLoginWithGoogle()}>
              Login dengan <Image src={GoogleLogo} alt="google-logo" width={32} height={32} />
            </ButtonComp>
            <ButtonComp variant="secondary" width="full" my={2} onClick={() => handleLoginWithGithub()}>
              Login dengan{" "}
              <Box mx={2}>
                <Image src={GithubLogo} alt="google-logo" width={24} height={24} />
              </Box>
            </ButtonComp>
            <Text textAlign="center">
              Atau daftar{" "}
              <Link href="/register">
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

export default Login;
