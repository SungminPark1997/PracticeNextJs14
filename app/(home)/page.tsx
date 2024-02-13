import Link from "next/link";

export const metadata = {
  title: "Home",
};
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
async function getMovie() {
  const response = await fetch(API_URL);
  const result = await response.json();
  return result;
}

export default async function HomePage() {
  const movies = await getMovie();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movie/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
