export const metadata = {
  title: "Home",
};
const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
async function getMovie() {
  const response = await fetch(URL);
  const result = await response.json();
  return result;
}

export default async function HomePage() {
  const movies = await getMovie();
  return <div>{JSON.stringify(movies)}</div>;
}
