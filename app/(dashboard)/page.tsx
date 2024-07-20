"use client";

import { Button } from "@/components/ui/button";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import { useNewCategory } from "@/features/categories/hooks/use-new-category";

export default function Home() {
  // const { onOpen } = useNewAccount();
  const { onOpen } = useNewCategory();

  return (
    <div>
      {/* <Button onClick={onOpen}>Add an account</Button> */}
      <Button onClick={onOpen}>Add a category</Button>
    </div>
  );
}
