import { Link } from "react-router-dom";
import InputBox from "../components/input.component";
import googleIcone from "../imgs/google.png";
import AnimationWrapper from "../components/page-animation";


const UserAUthForm = ({ type }) => {
  return (
    <AnimationWrapper keyValue={type}>
      <section className="h-cover flex items-center justify-center">
      <form className="w-[80%] max-w-[400px]">
        <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
          {type == "sign-in" ? "Welcome Back" : "Join us Today"}
        </h1>

        {type !== "sign-in" ? (
          <InputBox
            name="Fullname"
            type="text"
            plaesholder="Full Name"
            icon="fi-rr-user"
          />
        ) : (
          ""
        )}

        <InputBox
          name="Email"
          type="email"
          plaesholder="Email"
          icon="fi-rr-envelope"
        />

        <InputBox
          name="password"
          type="password"
          plaesholder="Password"
          icon="fi-rr-key"
        />

        <button className="btn-dark center mt-14" type="submit">
          {type.replace("-", " ")}
        </button>
        <div className="relative w-full items-center flex gap-2 my-10 opacity-10 uppercase text-black font-bold">
          <hr className="w-1/2 border-black" />
          <p>or</p>
          <hr className="w-1/2 border-black" />
        </div>

        <button className="btn-dark flex items-center justify-center gap-4 w-[90%] cwnter">
          <img src={googleIcone} className="w-5" />
          continue with Google
        </button>

        {type === "sign-in" ? 
          <p className="mt-6 text-dark-grey text-xl text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-black underline text-xl ml-1">Join us Today</Link>
          </p>
          :
            <p className="mt-6 text-dark-grey text-xl text-center">
            Already a member
            <Link to="/signin" className="text-black underline text-xl ml-1">Sign In here.</Link>
          </p>
}
      </form>
    </section>
    </AnimationWrapper>
  );
};
export default UserAUthForm;
