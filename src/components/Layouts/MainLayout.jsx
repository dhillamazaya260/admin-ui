import React from "react";
import Logo from "../Elements/Logo";
import Input from "../Elements/Input";

function MainLayout(props) {
  const { children } = props;

  return (
    <>
      <div className="flex min-h-screen">
        {/* Sidebar - GELAP */}
        <aside className="bg-gray-900 w-28 sm:w-64 text-gray-300 flex flex-col justify-between px-5 py-10">
          {/* Atas: Logo + Nav */}
          <div>
            <div className="mb-8 hidden sm:block">
              <Logo variant="secondary" />
            </div>
            <nav className="flex flex-col gap-1 mt-4">
              <div className="flex items-center hover:bg-gray-700 hover:text-white px-4 py-3 rounded-md cursor-pointer">
                <div className="mx-auto sm:mx-0">O</div>
                <div className="ms-3 hidden sm:block">Overview</div>
              </div>
              <div className="flex items-center hover:bg-gray-700 hover:text-white px-4 py-3 rounded-md cursor-pointer">
                <div className="mx-auto sm:mx-0">B</div>
                <div className="ms-3 hidden sm:block">Balances</div>
              </div>
              <div className="flex items-center hover:bg-gray-700 hover:text-white px-4 py-3 rounded-md cursor-pointer">
                <div className="mx-auto sm:mx-0">T</div>
                <div className="ms-3 hidden sm:block">Transactions</div>
              </div>
            </nav>
          </div>

          {/* Bawah: Logout + User */}
          <div>
            <div className="flex items-center bg-gray-700 text-white px-4 py-3 rounded-md cursor-pointer">
              <div className="mx-auto sm:mx-0">L</div>
              <div className="ms-3 hidden sm:block">Logout</div>
            </div>
            <div className="border-t border-gray-600 my-6"></div>
            <div className="flex justify-between items-center gap-2">
              <div className="text-gray-300 flex-shrink-0">Avatar</div>
              <div className="hidden sm:block text-sm">
                <div className="font-semibold text-white">Username</div>
                <div className="text-gray-400 text-xs">View Profile</div>
              </div>
              <div className="hidden sm:block text-gray-400 text-xs">icon</div>
            </div>
          </div>
        </aside>

        {/* Kanan */}
        <div className="bg-gray-100 flex-1 flex flex-col">
          <header className="border-b border-gray-200 px-6 py-5 flex justify-between items-center bg-white">
            <div className="flex items-center gap-4">
              <div className="font-bold text-2xl text-gray-800">Username</div>
              <div className="text-gray-400 text-sm hidden sm:block">May 19, 2023</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-gray-500">Icon</div>
              <Input backgroundColor="bg-gray-100" border="border-gray-200" placeholder="Search here" />
            </div>
          </header>
          <main className="flex-1 px-6 py-4">{children}</main>
        </div>
      </div>
    </>
  );
}

export default MainLayout;