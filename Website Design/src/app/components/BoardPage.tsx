import { KanbanBoard } from "@/app/components/KanbanBoard";
import { Library } from "@/app/components/Library";

export function BoardPage() {
  return (
    <div className="px-8 py-8">
      <KanbanBoard />
      <Library />
    </div>
  );
}
