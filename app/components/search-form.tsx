"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get("q");

  function handleSearch(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const query = formData.get("q");

    router.push(`/search?q=${query}`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center rounded-full bg-zinc-900 px-5 py-3 ring-2 "
    >
      <Search className="w-5 h-5" />
      <input
        name="q"
        defaultValue={query}
        type="text"
        placeholder="Buscar produtos"
        className=" flex-1 bg-transparent outline-none placeholder:text-zinc-500 "
        required
      />
    </form>
  );
}

export default SearchForm;
