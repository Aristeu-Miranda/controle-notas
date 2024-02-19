import { Link, useNavigate } from "react-router-dom";
import Botao from "../../Components/Botao/Botao";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import AOS from "aos";
import "aos/dist/aos.css";
import Cookies from "js-cookie";
import { singin } from "../../Service/UserService";

AOS.init();

const schema = object({
  name: string()
    .required("Campo obrigatório")
    .min(3, "Insira um nome válido")
    .max(35, "Excesso de caracteres"),
  password: string(),
});

function Inicio() {
  const navigate = useNavigate();
  const Login = async (data: any) => {
    try {
      const response = await singin(data)
      Cookies.set("token", response.data.token, { expires: 1 })
      navigate('/cn/new')
    } catch (error) {
      console.log('error', error)
    }   
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row bg-img-default bg-cover bg-center bg-no-repeat justify-evenly items-center">
      <div
        className="max-w-3xl text-center text-sm md:text-base"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="150"
        data-aos-duration="2000"
      >
        <header className="w-full text-center mb-5 md:py-20">
          <div className="text-xl md:text-7xl font-semibold mb-5">CN</div>
          <p className="text-xl md:text-5xl font-semibold">
            Rápido, simples e fácil.
          </p>
        </header>
        <div className="max-w-5xl">
          <div className="mb-10 text-center font-semibold text-neutral-950">
            <p>Simplificando o controle e o envio de notas fiscais</p>
          </div>
        </div>
      </div>
      <div
        className="flex bg-slate-300 bg-opacity-30 shadow-lg backdrop-filter backdrop-blur-sm rounded-lg border border-opacity-20 border-white"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="300"
        data-aos-duration="2000"
      >
        <div className="max-w-2xl text-center py-10">
          <form onSubmit={handleSubmit(Login)}>
            <div className="my-4 px-4 md:px-11 text-start">
              <label htmlFor="name">Colaborador</label>
              <input
                className="w-full py-1 rounded-md px-2"
                placeholder={"Digite seu nome"}
                {...register("name")}
              />
              <span className="block my-1 text-red-700">
                {errors?.name?.message}
              </span>
            </div>
            <div className="my-4 px-4 md:px-11 text-start">
            <label htmlFor="password">Senha</label>
              <input
                type="password"
                className="w-full py-1 rounded-md px-2"
                placeholder={"Digite sua senha"}
                {...register("password")}
              />
              <span className="block my-1 text-red-700">
                {errors?.password?.message}
              </span>
            </div>
            <Botao
              className={
                "bg-slate-800 p-2 mt-4 rounded-md text-slate-100 transition hover:font-bold hover:bg-slate-600"
              }
              type="submit"
            >
              Entrar
            </Botao>
          </form>
          <div className='mt-5'>
                    <Link to='sing-up' className='text-xs text-gray-600 hover:underline opacity-80'>Novo Usuário</Link>
                </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
