import { createClient } from "@/utils/supabase/server";

export default function Header() {

  async function fetchTest() {
    "use server";

    const queryParameters = new URLSearchParams(window.location.search)
    const access_token = queryParameters.get("access_token")
    const refress_token = queryParameters.get("refress_token")

    const supabase = createClient()
    if (access_token) {

      const { data, error } = await supabase.auth.getUser(access_token)
      if (error) console.log(error);
      console.log('data', data);
    }

  }

  return (
    <div className="flex flex-col gap-16 items-center w-full ">
      <form className="space-y-6 w-full" action={fetchTest} method="GET">
        <div>
          <label htmlFor="email" className="block font-medium leading-6 text-[200%] text-white mb-5">
            Password
          </label>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="password"
              required
              className="block w-full h-[5rem] rounded-full p-7 text-[250%] border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
              bg-transparent
              "
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block font-medium leading-6 text-[200%] text-white mb-5">
              Re-enter Password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="rePassword"
              name="rePassword"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full h-[5rem] rounded-full p-7 text-[250%] border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
              bg-transparent"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full h-[3rem] justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black hover:text-white shadow-sm hover:bg-transparent border-white border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
