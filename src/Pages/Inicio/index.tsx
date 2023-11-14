import { useNavigate } from "react-router-dom";
import Botao from "../../Components/Botao/Botao";
import { useContext, useEffect } from "react";
import { UserContext } from "../../Contexts/User/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import ImgBg from "../../Images/capa-inicio.png";


const schema = object({
  username: string()
    .required("Campo obrigatório")
    .min(3, "Insira um nome válido")
    .max(35, "Excesso de caracteres"),
});

function Inicio() {
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/cn/new");
    reset();
  };
  const { user, setUser } = useContext(UserContext);
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  useEffect(() => {
    const valueStorage = localStorage.getItem('userName');
    if (valueStorage) {
      setUser(valueStorage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('userName', user);
  }, [user]);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="mx-auto flex flex-col lg:flex-row md:justify-between xl:px-48 h-screen items-center max-w-[1920px]">
      <img
        className="w-screen h-screen top-0 left-0 z-[-1] absolute opacity-60"
        src={ImgBg}
        alt="img background"
      />
      <div className="max-w-3xl">
        <header className="w-full text-center py-20">
          <div className="text-xl md:text-7xl font-semibold mb-5">
              CN
          </div>
          <p className="text-xl md:text-5xl font-semibold">Rápido, simples e fácil</p>
        </header>
        <div className="max-w-5xl">
          <div className="mb-10 text-center font-semibold text-neutral-950">
            <p>
              Simplificando o controle e o envio de notas fiscais
            </p>
          </div>
        </div>
      </div>
      <div className="flex bg-slate-300 bg-opacity-30 shadow-lg backdrop-filter backdrop-blur-sm rounded-lg border border-opacity-20 border-white">
        <div className="max-w-2xl text-center py-10">
          <p className="font-semibold text-lg mt-4">Quem está trabalhando hoje?</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="my-4 px-11">
              <input
                className="w-[336px] mt-5 py-1 rounded-md px-2"
                placeholder={"Digite seu nome"}
                {...register("username")}
                onChange={changeName}
              />
              <span className="block my-1 text-red-700">
                {errors?.username?.message}
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
        </div>
      </div>
    </div>
  );
}

export default Inicio;
