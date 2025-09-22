"use client";
import { useState, useMemo } from "react";
import ReviewCard from "./ReviewCard";
import noresult from "../../../../public/images/no-result.svg"

interface Review {
  name?: string;
  avatar?: string;
  rating?: number;
  date?: string;
  comment?: string;
  images?: string[];
}

interface ProductTabsProps {
  description?: string;
  reviews?: Review[];
}

export default function ProductTabs({
  description = "No description available",
  reviews = [],
}: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description"
  );

  // ✅ Always ensure at least one review
  const fallbackReview: Review = {
    name: "John Doe",
    avatar: noresult,
    rating: 5,
    date: "2025-09-16",
    comment: "Great product! Highly recommend it.",
    images: [],
  };

  const safeReviews = reviews.length > 0 ? reviews : [fallbackReview];

  const tabs = useMemo(
    () => [
      {
        id: "description",
        label: "Description",
        content: (
          <div
            className="pt-6"
            role="tabpanel"
            aria-labelledby="description-tab"
          >
            <h3 className="sr-only">Product Description</h3>
            <p
              className="text-sm leading-6 text-gray-500 md:leading-6 mb-3"
              style={{ fontSize: "15px", color: "#6a7282" }}
            >
              {description}
            </p>
          </div>
        ),
      },
      {
        id: "reviews",
        label: `Customer Reviews (${safeReviews.length})`,
        content: (
          <div className="pt-6" role="tabpanel" aria-labelledby="reviews-tab">
            {safeReviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        ),
      },
    ],
    [safeReviews, description]
  );

  return (
    <div>
      {/* Tabs Header */}
      <div className="border-b border-gray-200">
        <div className="-mb-px flex space-x-8" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`${tab.id}-tab`}
              role="tab"
              aria-controls={`${tab.id}-panel`}
              aria-selected={activeTab === tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as "description" | "reviews")}
              className={`cursor-pointer border-b-2 pb-3 text-sm font-medium whitespace-nowrap focus:outline-none transition-colors
                ${
                  activeTab === tab.id
                    ? "border-emerald-600 text-emerald-600"
                    : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div
                key={tab.id}
                id={`${tab.id}-panel`}
                aria-labelledby={`${tab.id}-tab`}
              >
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
}
