import { signOutAction } from "@/app/_lib/actions";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="py-3 px-5  flex items-center gap-4 font-semibold w-full outline-none">
        <ArrowRightOnRectangleIcon className="h-5 w-5" />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
