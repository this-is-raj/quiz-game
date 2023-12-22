import Questions from "./Questions";
import { questions } from "./constants";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:px-24 px-4 pt-10 mx-autocontainer">
      <div className="relative flex flex-col place-items-center z-[-1]">
        <h1 className={`mb-3 text-[50px] font-semibold`}>Quiz Game</h1>
        <p className="mb-3 text-[20px]">
          This is a very simple quiz game just designed for the fun purpose.
        </p>
      </div>
      <Questions questions={questions} />
    </main>
  );
}
