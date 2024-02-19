import { Link, useNavigate } from "react-router-dom";
import Botao from "../../Components/Botao/Botao";
import ImgBgSingUp from "../../Images/bg-sign-up.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { singup } from "../../Service/UserService";
import Cookies from "js-cookie";

AOS.init();

const schema = object({
    name: string()
      .required("Campo obrigatório")
      .min(3, "Insira um nome válido")
      .max(35, "Excesso de caracteres"),
    email: string().required("Campo obrigatório"),
    password: string().required("Campo obrigatório"),
    confirmPassword: string().required("Campo obrigatório"),
  });

function Singup() {

    const navigate = useNavigate();
    const NewUser = async (data: any) => {
      try {
        const response = await singup(data)
        Cookies.set("token", response.data.token, { expires: 1 })
        navigate('/cn/new')
      } catch (error) {
        console.log('error', error)
      }     
    }
   
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });



  return (
    <div className="w-full h-screen flex flex-row justify-center items-center bg-img-singup bg-cover bg-center bg-no-repeat">
      <div
        className="py-2 text-center w-1/3 backdrop-filter backdrop-blur-sm bg-slate-300 bg-opacity-70 rounded-lg overflow-hidden"
        data-aos="fade-top"
        data-aos-offset="200"
        data-aos-delay="150"
        data-aos-duration="2000"
      >
        <div className="w-full h-full text-center">
          <p className="text-sm md:text-3xl font-bold mt-2">CADASTRO</p>
          <form onSubmit={handleSubmit(NewUser)}>
            <div className="my-4">
              <label className="my-auto text-xs md:text-base block" htmlFor="username">
                Colaborador:
              </label>
              <input
                type="text"
                className="p-1 w-2/4 bg-transparent border-b border-black text-center focus:outline-none"
                autoComplete="off"
                {...register("name")}
              />
              <span className="block text-xs text-red-700">
                {errors?.name?.message}
              </span>
            </div>
            <div className="my-4">
            <label className="my-auto text-xs md:text-base block" htmlFor="username">
                E-mail:
              </label>
            <input
                type="email"
                className="p-1 w-2/4 bg-transparent border-b border-black text-center focus:outline-none"
                autoComplete="off"
                {...register("email")}
              />
              <span className="block text-xs text-red-700">
                {errors?.email?.message}
              </span>
            </div>
            <div className="my-4">
              <label className="my-auto text-xs md:text-base block" htmlFor="userpass">
                Senha:
              </label>
              <input
                type="password"
                className="p-1 w-2/4 bg-transparent border-b border-black text-center focus:outline-none"
                {...register("password")}
              />
              <span className="block text-xs text-red-700">
                {errors?.password?.message}
              </span>
            </div>
            <div className="my-4">
              <label className="my-auto text-xs md:text-base block" htmlFor="confirmPassword">
                Confirme sua senha:
              </label>
              <input
                type="password"
                className="p-1 w-2/4 bg-transparent border-b border-black text-center focus:outline-none"
                {...register("confirmPassword")}
              />
              <span className="block text-xs text-red-700">
                {errors?.password?.message}
              </span>
            </div>
            <Botao className="text-white p-2 mt-50 bg-green-500 rounded-lg transition hover:bg-green-700 duration-300">
              Cadastrar
            </Botao>
          </form>
          <div className="mt-5">
            <Link
              to="/"
              className="text-xs text-gray-900 hover:underline opacity-80"
            >
              Voltar para login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Singup;
