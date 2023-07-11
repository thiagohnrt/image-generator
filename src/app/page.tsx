export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-3">
      <form action="/api/generator/story">
        <label htmlFor="url" className="text-2xl">
          Informe o link do produto
        </label>
        <input type="url" id="url" className="w-full p-3" />
        <button className="w-full p-3 mt-3 bg-sky-700">Gerar Imagem</button>
      </form>
    </main>
  );
}
