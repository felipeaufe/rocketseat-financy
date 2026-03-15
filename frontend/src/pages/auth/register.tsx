import { Link } from "react-router";
import logo from "@/assets/logo.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useAuthStore } from "@/stores/auth";
import { toast } from "sonner";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  EyeClosedIcon,
  EyeIcon,
  LockIcon,
  LogInIcon,
  MailIcon,
  UserIcon,
} from "lucide-react";
import { validateEmail } from "@/lib/validate-email";

export function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const signup = useAuthStore((state) => state.signup);

  const handlePasswordVisibility = () => {
    setPasswordVisible((current) => !current);
  };

  const submitRegister = async () => {
    if (loading) {
      return;
    }

    const normalizedName = name.trim();
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPassword = password.trim();

    if (
      normalizedName === "" ||
      normalizedEmail === "" ||
      normalizedPassword === ""
    ) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    if (!validateEmail(normalizedEmail)) {
      toast.error("Por favor, insira um e-mail válido.");
      return;
    }

    if (normalizedPassword.length < 8) {
      toast.error("A senha deve ter no mínimo 8 caracteres.");
      return;
    }

    setLoading(true);

    try {
      const signupMutate = await signup({
        name: normalizedName,
        email: normalizedEmail,
        password: normalizedPassword,
      });

      if (signupMutate) {
        toast.success("Cadastro realizado com sucesso!");
        return;
      }

      toast.error("Não foi possível concluir o cadastro. Tente novamente.");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      toast.error("Ocorreu um erro inesperado ao tentar criar sua conta.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    void submitRegister();
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center min-h-[calc(100vh-4rem)]">
      <img src={logo} alt="Financy Logo" />

      <Card className="w-full max-w-md border-gray-200 bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl text-center">Criar conta</CardTitle>
          <CardDescription className="text-center text-gray-600">
            Comece a controlar suas finanças ainda hoje
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form id="register-form" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="fullName" className="text-gray-600">
                  Nome completo
                </Label>
                <InputGroup className="border-gray-300 py-5">
                  <InputGroupInput
                    id="fullName"
                    type="text"
                    placeholder="Seu nome completo"
                    className="border-gray-200  px-4 py-5"
                    required
                    value={name}
                    autoComplete="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <InputGroupAddon align="inline-start">
                    <UserIcon className="text-muted-foreground" />
                  </InputGroupAddon>
                </InputGroup>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-gray-600">
                  E-mail
                </Label>
                <InputGroup className="border-gray-300 py-5">
                  <InputGroupInput
                    id="email"
                    type="email"
                    placeholder="mail@example.com"
                    className="border-gray-200  px-4 py-5"
                    required
                    value={email}
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputGroupAddon align="inline-start">
                    <MailIcon className="text-muted-foreground" />
                  </InputGroupAddon>
                </InputGroup>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-gray-600">
                  Senha
                </Label>
                <InputGroup className="border-gray-300 py-5">
                  <InputGroupInput
                    id="password"
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Digite sua senha"
                    required
                    value={password}
                    autoComplete="new-password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputGroupAddon align="inline-start">
                    <LockIcon className="text-muted-foreground" />
                  </InputGroupAddon>
                  <InputGroupAddon align="inline-end">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={handlePasswordVisibility}
                      aria-label={
                        passwordVisible ? "Ocultar senha" : "Mostrar senha"
                      }
                    >
                      {passwordVisible ? (
                        <EyeIcon className="text-muted-foreground" />
                      ) : (
                        <EyeClosedIcon className="text-muted-foreground" />
                      )}
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
                <span className="text-gray-500 text-xs">
                  A senha deve ter no mínimo 8 caracteres
                </span>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            form="register-form"
            className="w-full bg-brand-base text-white hover:bg-brand-dark p-5"
            disabled={
              loading ||
              name.trim() === "" ||
              email.trim() === "" ||
              password.trim() === "" ||
              password.trim().length < 8
            }
          >
            {loading ? "Cadastrando..." : "Cadastrar"}
          </Button>
          <div className="flex gap-2 w-full items-center justify-center-safe">
            <div className="h-px bg-gray-300 w-full"></div>
            <div className="text-gray-500 px-2">ou</div>
            <div className="h-px bg-gray-300 w-full"></div>
          </div>
          <div className="text-center text-gray-600">Já tem uma conta?</div>
          <Button
            variant="outline"
            className="w-full border-gray-300 text-gray-700 hover:text-gray-900 hover:bg-gray-100 p-5"
            asChild
          >
            <Link to="/login">
              <LogInIcon className="inline-block" />
              Fazer login
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
