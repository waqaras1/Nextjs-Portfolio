"use client";

import { useState } from "react";
import { Badge } from "./ui/badge";

interface ProjectFiltersProps {
  allTags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  onClearFilters: () => void;
}

export function ProjectFilters({ 
  allTags, 
  selectedTags, 
  onTagToggle, 
  onClearFilters 
}: ProjectFiltersProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Filter by Technology</h3>
        {selectedTags.length > 0 && (
          <button
            onClick={onClearFilters}
            className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Clear Filters
          </button>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => onTagToggle(tag)}
              className="transition-all duration-200"
            >
              <Badge
                variant={isSelected ? "default" : "secondary"}
                className={`cursor-pointer ${
                  isSelected 
                    ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/50" 
                    : "hover:bg-gray-700/50"
                }`}
              >
                {tag}
              </Badge>
            </button>
          );
        })}
      </div>
      
      {selectedTags.length > 0 && (
        <p className="text-sm text-gray-400">
          Showing projects with: {selectedTags.join(", ")}
        </p>
      )}
    </div>
  );
}
