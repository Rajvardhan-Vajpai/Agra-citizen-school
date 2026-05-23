/**
 * API utility functions for form submissions and data fetching
 */

interface ApiError {
  error: string;
  details?: Record<string, unknown>;
}

interface ApiResponse<T> {
  success?: boolean;
  message?: string;
  data?: T;
  error?: string;
}

/**
 * Submit an inquiry form
 */
export async function submitInquiry(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}): Promise<ApiResponse<{ id: string }>> {
  try {
    const response = await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = (await response.json()) as ApiError;
      throw new Error(error.error || "Failed to submit inquiry");
    }

    return await response.json();
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return {
      error: error instanceof Error ? error.message : "An error occurred",
    };
  }
}

/**
 * Fetch all inquiries (admin only)
 */
export async function getInquiries() {
  try {
    const response = await fetch("/api/inquiry");
    if (!response.ok) throw new Error("Failed to fetch inquiries");
    return await response.json();
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    return { inquiries: [], error: "Failed to fetch inquiries" };
  }
}

/**
 * Fetch events with optional filters
 */
export async function getEvents(filters?: {
  category?: string;
  published?: boolean;
}) {
  try {
    const params = new URLSearchParams();
    if (filters?.category) params.append("category", filters.category);
    if (filters?.published !== undefined)
      params.append("published", String(filters.published));

    const response = await fetch(`/api/events?${params}`);
    if (!response.ok) throw new Error("Failed to fetch events");
    return await response.json();
  } catch (error) {
    console.error("Error fetching events:", error);
    return { events: [], error: "Failed to fetch events" };
  }
}

/**
 * Fetch notices with optional filters
 */
export async function getNotices(filters?: {
  type?: string;
  published?: boolean;
}) {
  try {
    const params = new URLSearchParams();
    if (filters?.type) params.append("type", filters.type);
    if (filters?.published !== undefined)
      params.append("published", String(filters.published));

    const response = await fetch(`/api/notices?${params}`);
    if (!response.ok) throw new Error("Failed to fetch notices");
    return await response.json();
  } catch (error) {
    console.error("Error fetching notices:", error);
    return { notices: [], error: "Failed to fetch notices" };
  }
}

/**
 * Fetch gallery items with optional filters
 */
export async function getGallery(filters?: {
  category?: string;
  published?: boolean;
}) {
  try {
    const params = new URLSearchParams();
    if (filters?.category) params.append("category", filters.category);
    if (filters?.published !== undefined)
      params.append("published", String(filters.published));

    const response = await fetch(`/api/gallery?${params}`);
    if (!response.ok) throw new Error("Failed to fetch gallery");
    return await response.json();
  } catch (error) {
    console.error("Error fetching gallery:", error);
    return { gallery: [], error: "Failed to fetch gallery" };
  }
}
