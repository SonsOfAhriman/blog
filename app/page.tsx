import styles from "./page.module.css";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-6 mb-6 text-3xl text-center dark:text-white"></p>
      <Posts />
    </main>
  );
}
