import { useState } from "react";
import { GripVertical, Plus } from "lucide-react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

type Task = {
  id: string;
  text: string;
  column: "todo" | "doing" | "done";
};

type DragItem = {
  id: string;
  column: string;
};

function TaskCard({ task, onMove }: { task: Task; onMove: (id: string, newColumn: Task["column"]) => void }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id, column: task.column },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="bg-black border border-white/20 p-4 mb-3 cursor-move"
      style={{ 
        opacity: isDragging ? 0.5 : 1,
        fontFamily: "'Courier New', monospace"
      }}
    >
      <div className="flex items-start gap-2">
        <GripVertical className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5" />
        <span className="text-white text-sm">{task.text}</span>
      </div>
    </div>
  );
}

function Column({ 
  title, 
  color, 
  column, 
  tasks, 
  onMove,
  onAddTask 
}: { 
  title: string; 
  color: string; 
  column: Task["column"];
  tasks: Task[];
  onMove: (id: string, newColumn: Task["column"]) => void;
  onAddTask: (column: Task["column"]) => void;
}) {
  const [, drop] = useDrop(() => ({
    accept: "task",
    drop: (item: DragItem) => {
      if (item.column !== column) {
        onMove(item.id, column);
      }
    },
  }));

  return (
    <div ref={drop} className="flex-1 border border-white/20 min-h-[500px] flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-white/20">
        <h3 className="text-white uppercase tracking-wider" style={{ color, fontFamily: "'Courier New', monospace" }}>
          {title}
        </h3>
        <button 
          onClick={() => onAddTask(column)}
          className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <Plus className="w-4 h-4 text-white/60" />
        </button>
      </div>
      <div className="p-4 flex-1">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onMove={onMove} />
        ))}
      </div>
    </div>
  );
}

export function KanbanBoard() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", text: "write my leadership narrative", column: "todo" },
    { id: "2", text: "setup conversations with team", column: "todo" },
    { id: "3", text: "form my leadership focus areas", column: "todo" },
    { id: "4", text: "identify my leadership style", column: "doing" },
    { id: "5", text: "watch video on emergent strategy", column: "done" },
  ]);

  const moveTask = (id: string, newColumn: Task["column"]) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, column: newColumn } : task))
    );
  };

  const addTask = (column: Task["column"]) => {
    const newTask: Task = {
      id: Date.now().toString(),
      text: "New task",
      column,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-3 gap-px bg-white/20">
        <Column
          title="to do"
          color="#ff6b35"
          column="todo"
          tasks={tasks.filter((t) => t.column === "todo")}
          onMove={moveTask}
          onAddTask={addTask}
        />
        <Column
          title="doing"
          color="#4ecdc4"
          column="doing"
          tasks={tasks.filter((t) => t.column === "doing")}
          onMove={moveTask}
          onAddTask={addTask}
        />
        <Column
          title="done!"
          color="#95e06c"
          column="done"
          tasks={tasks.filter((t) => t.column === "done")}
          onMove={moveTask}
          onAddTask={addTask}
        />
      </div>
    </DndProvider>
  );
}
