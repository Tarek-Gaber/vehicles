import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

interface TextFilterProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  debounceMs?: number;
}

export function TextFilter({
  value,
  onChange,
  placeholder = "Filter...",
  debounceMs = 300,
}: TextFilterProps) {
  const [localValue, setLocalValue] = useState(value);

  // Debounce the onChange
  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(localValue);
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [localValue, debounceMs, onChange]);

  // Sync with external value changes
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  return (
    <Input
      type="text"
      value={localValue}
      onChange={(e) => setLocalValue(e.target.value)}
      placeholder={placeholder}
      className="h-9 w-[200px]"
    />
  );
}
