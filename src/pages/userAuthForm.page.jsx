import InputBox from "../components/input.component";

const UserAUthForm = ({ type }) => {
  return (
    <section className="h-cover flex items-center justify-center">
      <form className="w-[80%] max-w-[400px]">
        <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
          {type == "sign-in" ? "Welcome Back" : "Join us Today"}
        </h1>

        {
          type !== "sign-in" ?
          <InputBox 
          name="Fullname"
          type="text"
          plaesholder="Full Name"
          icon="fi-rr-user"
          /> : ""
        }

        <InputBox 
          name="Email"
          type="email"
          plaesholder="email"
          icon="fi-rr-envelope"
          /> 
      </form>
    </section>
  );
};
 export default UserAUthForm;