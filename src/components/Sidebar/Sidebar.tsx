"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FullSidebarItem, SidebarMenu } from "./SidebarMenu";
import { useRef, useState } from "react";
import { MenuIcon, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { getSelectedQuestion } from "@/utils/get-selected-question";
import { getQuestionId } from "@/utils/get-question-id";
import { getQuestionHref } from "@/utils/get-question-href";

type SidebarProps = {
  items: FullSidebarItem[];
};

const commonSidebarClasses = "w-64 bg-white p-4 h-screen overflow-y-auto";

export function Sidebar({ items }: SidebarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const questionParam = searchParams.get("q");

  const mobileMenuWrapperRef = useRef<HTMLDivElement>(null);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useOutsideClick(mobileMenuWrapperRef, () => {
    setIsSidebarOpen(false);
  });

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleSelectQuestion = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    setIsSidebarOpen(false);

    const tagId = getQuestionId(id);
    const questionHref = getQuestionHref(id);

    const questionTitle = document.getElementById(tagId);

    if (questionTitle) {
      window.scrollTo({
        top: questionTitle.offsetTop - 16,
        behavior: "smooth",
      });

      router.replace(questionHref, { scroll: false });
    }
  };

  const selectedItemId = getSelectedQuestion(questionParam);

  return (
    <>
      <nav className={cn(commonSidebarClasses, "hidden lg:block sticky top-0")}>
        <SidebarMenu
          items={items}
          selectedItemId={selectedItemId}
          onClickItem={handleSelectQuestion}
        />
      </nav>
      <div className="lg:hidden p-4 w-fit">
        <ButtonIcon
          onClick={handleOpenSidebar}
          ariaLabel="Abrir menu lateral"
          className={cn(
            "transition-opacity duration-300",
            isSidebarOpen && "opacity-0"
          )}
        >
          <MenuIcon size={24} />
        </ButtonIcon>
      </div>
      <div
        className={cn(
          commonSidebarClasses,
          "fixed z-50 top-0 transition-transform duration-300 lg:hidden",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
        ref={mobileMenuWrapperRef}
      >
        <SidebarMenu
          items={items}
          selectedItemId={selectedItemId}
          onClickItem={handleSelectQuestion}
        />
      </div>
      <ButtonIcon
        onClick={handleCloseSidebar}
        ariaLabel="Fechar menu lateral"
        className={cn(
          "fixed top-4 lg:hidden transition-all duration-300",
          isSidebarOpen ? "left-72" : "-left-10"
        )}
      >
        <X size={24} />
      </ButtonIcon>
    </>
  );
}
