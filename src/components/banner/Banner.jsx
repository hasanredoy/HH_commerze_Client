import banner from '../../assets/banking-background-design.png'
const Banner = () => {
  return (
      <section className=" h-[250px] px-10 flex w-screen max-w-[100%] bg-slate-100  ">
        <div className=" flex-1 flex pt-20  text-start justify-start   flex-col gap-3">
          <h1 className=" text-3xl font-black">
            {" "}
            Welcome To{" "}
            <span className=" font-black bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-800 via-slate-400 to-fuchsia-900 drop-shadow-lg shadow-amber-50">
              HH CoMmerZe,.,
            </span>
          </h1>
          <p className=" text-lg">
            A digital mobile banking platform.In our system user can pay, add and send balance
            anytime anywhere..
          </p>
        </div>
        <div className=" flex-1">
          <img src={banner} alt="user home banner" className=" h-full w-full" />
        </div>
      </section>
  );
};

export default Banner;