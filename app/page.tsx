
import Header from "@/components/Header";
import { createClient } from "@/utils/supabase/server";
import DeployButton from "../components/DeployButton";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };


  async function fetchTest() {
    const supabase = createClient()
    const { data, error } = await supabase.from('products').select('*');
    if (error) console.log(error);
    console.log('data', data);
  }
  fetchTest()

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <DeployButton />
        </div>
      </nav>
      <div className="animate-in  w-[30%] px-3 ">
        <Header />
      </div>

    </div>
  );
}
