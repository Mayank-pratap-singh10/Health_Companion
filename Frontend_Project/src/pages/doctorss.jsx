import { useState } from "react";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Jenkins",
    specialty: "Cardiologist",
    specialtyCategory: "Cardiology",
    experience: 8,
    rating: 4.9,
    status: "AVAILABLE",
    description: "Expert in interventional cardiology and heart failure management with a focus on preventive care.",
    image: "https://picsum.photos/seed/sarah/300/300",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    specialtyCategory: "Neurology",
    experience: 12,
    rating: 4.8,
    status: "ON BREAK",
    description: "Specializing in neuromuscular disorders and neuro-rehabilitation for complex neurological cases.",
    image: "https://picsum.photos/seed/michael/300/300",
  },
  {
    id: 3,
    name: "Dr. Elena Rodriguez",
    specialty: "Pediatrician",
    specialtyCategory: "Pediatrics",
    experience: 6,
    rating: 5.0,
    status: "AVAILABLE",
    description: "Dedicated to providing compassionate healthcare for children from infancy through adolescence.",
    image: "https://picsum.photos/seed/elena/300/300",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Orthopedics",
    specialtyCategory: "Orthopedics",
    experience: 15,
    rating: 4.7,
    status: "AVAILABLE",
    description: "Leading specialist in joint replacement and sports-related orthopedic injuries and rehabilitation.",
    image: "https://picsum.photos/seed/james/300/300",
  },
  {
    id: 5,
    name: "Dr. Priya Patel",
    specialty: "Dermatologist",
    specialtyCategory: "Dermatology",
    experience: 9,
    rating: 4.8,
    status: "AVAILABLE",
    description: "Specializing in medical and cosmetic dermatology with expertise in skin cancer detection.",
    image: "https://picsum.photos/seed/priya/300/300",
  },
  {
    id: 6,
    name: "Dr. Robert Kim",
    specialty: "Cardiologist",
    specialtyCategory: "Cardiology",
    experience: 18,
    rating: 4.9,
    status: "ON BREAK",
    description: "Senior cardiologist with extensive experience in advanced cardiac imaging and interventions.",
    image: "https://picsum.photos/seed/robert/300/300",
  },
  {
    id: 7,
    name: "Dr. Amanda Torres",
    specialty: "Neurologist",
    specialtyCategory: "Neurology",
    experience: 3,
    rating: 4.6,
    status: "AVAILABLE",
    description: "Focused on epilepsy management and cutting-edge neurodegenerative disease treatments.",
    image: "https://picsum.photos/seed/amanda/300/300",
  },
  {
    id: 8,
    name: "Dr. David Park",
    specialty: "Pediatrician",
    specialtyCategory: "Pediatrics",
    experience: 22,
    rating: 4.9,
    status: "AVAILABLE",
    description: "Veteran pediatrician known for exceptional care in childhood developmental disorders.",
    image: "https://picsum.photos/seed/david/300/300",
  },
];

const specialties = ["All Specialists", "Cardiology", "Neurology", "Pediatrics", "Orthopedics", "Dermatology"];
const experienceLevels = ["1-5 Years", "5-10 Years", "10-20 Years", "20+ Years"];
const availabilityOptions = ["Any Availability", "Available Now", "On Break"];

function getExperienceBucket(years) {
  if (years <= 5) return "1-5 Years";
  if (years <= 10) return "5-10 Years";
  if (years <= 20) return "10-20 Years";
  return "20+ Years";
}

function StatusBadge({ status }) {
  const isAvailable = status === "AVAILABLE";
  return (
    <span
      style={{
        position: "absolute",
        top: 12,
        right: 12,
        background: "white",
        borderRadius: 20,
        padding: "4px 10px",
        fontSize: 11,
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        gap: 5,
        boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
      }}
    >
      <span
        style={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: isAvailable ? "#22c55e" : "#f97316",
          display: "inline-block",
        }}
      />
      {status}
    </span>
  );
}

function StarRating({ rating }) {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: 3, fontSize: 13, color: "#6b7280" }}>
      <span style={{ color: "#f59e0b" }}>★</span>
      {rating.toFixed(1)}
    </span>
  );
}

function BookingModal({ doctor, onClose }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [reason, setReason] = useState("");
  const [booked, setBooked] = useState(false);

  const times = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];

  function handleBook() {
    if (!selectedDate || !selectedTime) return;
    setBooked(true);
  }

  return (
    <div
      style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)",
        display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000,
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        style={{
          background: "white", borderRadius: 16, padding: 32, width: 460,
          maxWidth: "90vw", boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
        }}
      >
        {booked ? (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Appointment Booked!</h2>
            <p style={{ color: "#6b7280", marginBottom: 6 }}>
              <strong>{doctor.name}</strong>
            </p>
            <p style={{ color: "#6b7280", marginBottom: 6 }}>{selectedDate} at {selectedTime}</p>
            <button
              onClick={onClose}
              style={{
                marginTop: 20, background: "#2563eb", color: "white",
                border: "none", borderRadius: 8, padding: "10px 28px",
                fontWeight: 600, cursor: "pointer", fontSize: 15,
              }}
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <img
                src={doctor.image}
                alt={doctor.name}
                style={{ width: 56, height: 56, borderRadius: "50%", objectFit: "cover" }}
              />
              <div>
                <div style={{ fontWeight: 700, fontSize: 17 }}>{doctor.name}</div>
                <div style={{ color: "#2563eb", fontSize: 13 }}>{doctor.specialty}</div>
              </div>
              <button
                onClick={onClose}
                style={{
                  marginLeft: "auto", background: "none", border: "none",
                  fontSize: 22, cursor: "pointer", color: "#9ca3af",
                }}
              >
                ×
              </button>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 6, color: "#374151" }}>
                Select Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                style={{
                  width: "100%", border: "1.5px solid #e5e7eb", borderRadius: 8,
                  padding: "9px 12px", fontSize: 14, outline: "none", boxSizing: "border-box",
                }}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 8, color: "#374151" }}>
                Select Time
              </label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {times.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    style={{
                      padding: "7px 14px", borderRadius: 20, fontSize: 13, cursor: "pointer",
                      border: selectedTime === t ? "none" : "1.5px solid #e5e7eb",
                      background: selectedTime === t ? "#2563eb" : "white",
                      color: selectedTime === t ? "white" : "#374151",
                      fontWeight: selectedTime === t ? 600 : 400,
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 6, color: "#374151" }}>
                Reason for Visit (optional)
              </label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Briefly describe your concern..."
                rows={3}
                style={{
                  width: "100%", border: "1.5px solid #e5e7eb", borderRadius: 8,
                  padding: "9px 12px", fontSize: 14, outline: "none", resize: "none",
                  boxSizing: "border-box", fontFamily: "inherit",
                }}
              />
            </div>

            <button
              onClick={handleBook}
              disabled={!selectedDate || !selectedTime}
              style={{
                width: "100%", background: selectedDate && selectedTime ? "#2563eb" : "#d1d5db",
                color: "white", border: "none", borderRadius: 8, padding: "12px",
                fontWeight: 700, fontSize: 15, cursor: selectedDate && selectedTime ? "pointer" : "not-allowed",
              }}
            >
              Confirm Appointment
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function DoctorCard({ doctor, onBook, liked, onToggleLike }) {
  return (
    <div
      style={{
        background: "white", borderRadius: 14, boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
        overflow: "hidden", display: "flex", flexDirection: "column", border: "1px solid #f0f0f0",
        transition: "box-shadow 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.12)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 1px 6px rgba(0,0,0,0.08)")}
    >
      <div style={{ position: "relative" }}>
        <img
          src={doctor.image}
          alt={doctor.name}
          style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }}
        />
        <StatusBadge status={doctor.status} />
      </div>
      <div style={{ padding: "16px 18px 18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
          <span style={{ fontWeight: 700, fontSize: 16 }}>{doctor.name}</span>
          <StarRating rating={doctor.rating} />
        </div>
        <div style={{ color: "#2563eb", fontWeight: 600, fontSize: 13, marginBottom: 4 }}>{doctor.specialty}</div>
        <div style={{ color: "#6b7280", fontSize: 12, marginBottom: 10, display: "flex", alignItems: "center", gap: 4 }}>
          <span>🕐</span> {doctor.experience} Years Experience
        </div>
        <p style={{ color: "#4b5563", fontSize: 13, lineHeight: 1.5, marginBottom: 16 }}>
          {doctor.description.length > 80 ? doctor.description.slice(0, 80) + " ..." : doctor.description}
        </p>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button
            onClick={() => onBook(doctor)}
            style={{
              flex: 1, background: "#2563eb", color: "white", border: "none",
              borderRadius: 8, padding: "10px 0", fontWeight: 600, fontSize: 14,
              cursor: "pointer", transition: "background 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1d4ed8")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#2563eb")}
          >
            Book Appointment
          </button>
          <button
            onClick={() => onToggleLike(doctor.id)}
            style={{
              width: 38, height: 38, borderRadius: 8, border: "1.5px solid #e5e7eb",
              background: "white", cursor: "pointer", display: "flex",
              alignItems: "center", justifyContent: "center", fontSize: 16,
              color: liked ? "#ef4444" : "#d1d5db", transition: "color 0.15s",
            }}
          >
            {liked ? "♥" : "♡"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function doctorss() {
  const [selectedSpecialties, setSelectedSpecialties] = useState(["All Specialists"]);
  const [availability, setAvailability] = useState("Any Availability");
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [appliedFilters, setAppliedFilters] = useState({ specialties: ["All Specialists"], availability: "Any Availability", experience: null });
  const [viewMode, setViewMode] = useState("grid");
  const [bookingDoctor, setBookingDoctor] = useState(null);
  const [likedDoctors, setLikedDoctors] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [activeNav, setActiveNav] = useState("Dashboard");

  function toggleSpecialty(spec) {
    if (spec === "All Specialists") {
      setSelectedSpecialties(["All Specialists"]);
      return;
    }
    setSelectedSpecialties((prev) => {
      const withoutAll = prev.filter((s) => s !== "All Specialists");
      if (withoutAll.includes(spec)) {
        const next = withoutAll.filter((s) => s !== spec);
        return next.length === 0 ? ["All Specialists"] : next;
      }
      return [...withoutAll, spec];
    });
  }

  function applyFilters() {
    setAppliedFilters({ specialties: selectedSpecialties, availability, experience: selectedExperience });
  }

  function clearAll() {
    setSelectedSpecialties(["All Specialists"]);
    setAvailability("Any Availability");
    setSelectedExperience(null);
    setAppliedFilters({ specialties: ["All Specialists"], availability: "Any Availability", experience: null });
  }

  function toggleLike(id) {
    setLikedDoctors((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  const filtered = doctors.filter((doc) => {
    const { specialties: sp, availability: av, experience: exp } = appliedFilters;
    if (!sp.includes("All Specialists") && !sp.includes(doc.specialtyCategory)) return false;
    if (av === "Available Now" && doc.status !== "AVAILABLE") return false;
    if (av === "On Break" && doc.status !== "ON BREAK") return false;
    if (exp && getExperienceBucket(doc.experience) !== exp) return false;
    if (searchQuery && !doc.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !doc.specialty.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const navItems = ["Dashboard", "Schedule", "Patient Records", "Inventory"];

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#f5f7fa", minHeight: "100vh" }}>
      {/* Navbar */}
      <nav style={{
        background: "white", borderBottom: "1px solid #e5e7eb", padding: "0 24px",
        display: "flex", alignItems: "center", height: 56, gap: 24, position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginRight: 16 }}>
          <div style={{
            width: 32, height: 32, background: "#2563eb", borderRadius: 8,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ color: "white", fontSize: 16 }}>+</span>
          </div>
          <span style={{ fontWeight: 700, fontSize: 16 }}>MedDirect</span>
        </div>
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveNav(item)}
            style={{
              background: activeNav === item ? "#2563eb" : "none",
              color: activeNav === item ? "white" : "#6b7280",
              border: "none", borderRadius: 6, padding: "6px 14px",
              fontWeight: activeNav === item ? 600 : 400, fontSize: 14,
              cursor: "pointer",
            }}
          >
            {item}
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <div style={{
          display: "flex", alignItems: "center", gap: 6,
          background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 8,
          padding: "7px 12px", width: 220,
        }}>
          <span style={{ color: "#9ca3af" }}>🔍</span>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search doctors, specialties..."
            style={{ border: "none", background: "none", outline: "none", fontSize: 13, width: "100%", color: "#374151" }}
          />
        </div>
        <div style={{ fontSize: 20, cursor: "pointer", color: "#6b7280" }}>🔔</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 34, height: 34, borderRadius: "50%", background: "#2563eb",
            display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 14,
          }}>A</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.2 }}>Admin User</div>
            <div style={{ fontSize: 11, color: "#9ca3af" }}>Hospital Manager</div>
          </div>
        </div>
      </nav>

      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <aside style={{
          width: 230, minHeight: "calc(100vh - 56px)", background: "white",
          borderRight: "1px solid #e5e7eb", padding: "24px 16px", flexShrink: 0,
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", letterSpacing: 1, marginBottom: 12 }}>
            SPECIALIZATION
          </div>
          {specialties.map((spec) => (
            <label
              key={spec}
              style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, cursor: "pointer" }}
            >
              <input
                type="checkbox"
                checked={selectedSpecialties.includes(spec)}
                onChange={() => toggleSpecialty(spec)}
                style={{ width: 16, height: 16, accentColor: "#2563eb" }}
              />
              <span style={{ fontSize: 14, color: "#374151" }}>{spec}</span>
            </label>
          ))}

          <div style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", letterSpacing: 1, margin: "20px 0 12px" }}>
            AVAILABILITY
          </div>
          <select
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            style={{
              width: "100%", border: "1.5px solid #e5e7eb", borderRadius: 8,
              padding: "8px 12px", fontSize: 14, outline: "none", cursor: "pointer",
              background: "white", color: "#374151",
            }}
          >
            {availabilityOptions.map((o) => <option key={o}>{o}</option>)}
          </select>

          <div style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", letterSpacing: 1, margin: "20px 0 12px" }}>
            EXPERIENCE LEVEL
          </div>
          {experienceLevels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => setSelectedExperience(selectedExperience === lvl ? null : lvl)}
              style={{
                display: "block", width: "100%", textAlign: "left",
                padding: "9px 12px", borderRadius: 8, marginBottom: 8, fontSize: 14,
                cursor: "pointer", fontWeight: selectedExperience === lvl ? 600 : 400,
                border: selectedExperience === lvl ? "1.5px solid #2563eb" : "1.5px solid #e5e7eb",
                background: selectedExperience === lvl ? "#eff6ff" : "white",
                color: selectedExperience === lvl ? "#2563eb" : "#374151",
              }}
            >
              {lvl}
            </button>
          ))}

          <button
            onClick={applyFilters}
            style={{
              width: "100%", background: "#2563eb", color: "white", border: "none",
              borderRadius: 8, padding: "11px 0", fontWeight: 700, fontSize: 14,
              cursor: "pointer", marginTop: 16, marginBottom: 8,
            }}
          >
            Apply Filters
          </button>
          <button
            onClick={clearAll}
            style={{
              width: "100%", background: "none", color: "#6b7280", border: "none",
              fontSize: 13, cursor: "pointer", padding: "4px 0",
            }}
          >
            Clear All
          </button>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, padding: "28px 28px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 24 }}>
            <div>
              <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>Medical Directory</h1>
              <p style={{ color: "#6b7280", fontSize: 14, margin: "4px 0 0" }}>
                Showing {filtered.length} specialists available in your hospital
              </p>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <button
                onClick={() => setViewMode("grid")}
                style={{
                  width: 36, height: 36, borderRadius: 8, border: "1.5px solid #e5e7eb",
                  background: viewMode === "grid" ? "#eff6ff" : "white", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16,
                  color: viewMode === "grid" ? "#2563eb" : "#9ca3af",
                }}
              >
                ⊞
              </button>
              <button
                onClick={() => setViewMode("list")}
                style={{
                  width: 36, height: 36, borderRadius: 8, border: "1.5px solid #e5e7eb",
                  background: viewMode === "list" ? "#eff6ff" : "white", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16,
                  color: viewMode === "list" ? "#2563eb" : "#9ca3af",
                }}
              >
                ☰
              </button>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0", color: "#9ca3af" }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
              <div style={{ fontSize: 16, fontWeight: 600 }}>No doctors match your filters</div>
              <div style={{ fontSize: 13, marginTop: 4 }}>Try adjusting your criteria</div>
            </div>
          ) : viewMode === "grid" ? (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 20,
            }}>
              {filtered.map((doc) => (
                <DoctorCard
                  key={doc.id}
                  doctor={doc}
                  onBook={setBookingDoctor}
                  liked={likedDoctors.has(doc.id)}
                  onToggleLike={toggleLike}
                />
              ))}
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {filtered.map((doc) => (
                <div
                  key={doc.id}
                  style={{
                    background: "white", borderRadius: 12, border: "1px solid #f0f0f0",
                    padding: "16px 20px", display: "flex", alignItems: "center", gap: 16,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  }}
                >
                  <img src={doc.image} alt={doc.name} style={{ width: 60, height: 60, borderRadius: "50%", objectFit: "cover" }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontWeight: 700, fontSize: 15 }}>{doc.name}</span>
                      <span style={{
                        background: doc.status === "AVAILABLE" ? "#dcfce7" : "#ffedd5",
                        color: doc.status === "AVAILABLE" ? "#16a34a" : "#ea580c",
                        borderRadius: 20, padding: "2px 10px", fontSize: 11, fontWeight: 600,
                      }}>{doc.status}</span>
                    </div>
                    <div style={{ color: "#2563eb", fontSize: 13, fontWeight: 600 }}>{doc.specialty}</div>
                    <div style={{ color: "#6b7280", fontSize: 12 }}>{doc.experience} Years Experience</div>
                  </div>
                  <StarRating rating={doc.rating} />
                  <button
                    onClick={() => toggleLike(doc.id)}
                    style={{
                      background: "none", border: "1.5px solid #e5e7eb", borderRadius: 8,
                      width: 36, height: 36, cursor: "pointer", fontSize: 15,
                      color: likedDoctors.has(doc.id) ? "#ef4444" : "#d1d5db",
                    }}
                  >
                    {likedDoctors.has(doc.id) ? "♥" : "♡"}
                  </button>
                  <button
                    onClick={() => setBookingDoctor(doc)}
                    style={{
                      background: "#2563eb", color: "white", border: "none",
                      borderRadius: 8, padding: "9px 20px", fontWeight: 600, fontSize: 13, cursor: "pointer",
                    }}
                  >
                    Book Appointment
                  </button>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {bookingDoctor && (
        <BookingModal doctor={bookingDoctor} onClose={() => setBookingDoctor(null)} />
      )}
    </div>
  );
}
