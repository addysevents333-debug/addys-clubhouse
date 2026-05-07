import React, { useEffect, useState } from "react";
const SUPABASE_URL = "https://ztqtfftgtwgxrtoqqggx.supabase.co";
const SUPABASE_KEY = "sb_publishable_V3P46SsSqP3cj8-hensd9w_OYqIvuhC";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const burgundy = "#7b1734";
const darkBurgundy = "#4a0d20";
const cream = "#faf7f3";
const blush = "#f3e5ea";
const gold = "#c8a96a";
const logoUrl = "/mnt/data/Addy's no background logo (1)(6).png";

const events = [
  {
    id: 1,
    club: "Wine Club",
    title: "Rioja: Spain’s Most Famous Wine Region",
    date: "Tue, May 26",
    time: "6:30 PM",
    spots: "8 spots left",
    location: "Addy’s Classroom",
    status: "RSVP Open",
    formLink: "https://forms.google.com",
  },
  {
    id: 2,
    club: "Wine Club",
    title: "Rioja: Spain’s Most Famous Wine Region",
    date: "Wed, May 27",
    time: "6:30 PM",
    spots: "12 spots left",
    location: "Addy’s Classroom",
    status: "RSVP Open",
    formLink: "https://forms.google.com",
  },
  {
    id: 3,
    club: "Spirits Club",
    title: "Scotch vs. Irish Whiskey Night",
    date: "Mon, May 18",
    time: "6:30 PM",
    spots: "Waitlist",
    location: "Addy’s Classroom",
    status: "Join Waitlist",
    formLink: "https://forms.google.com",
  },
  {
    id: 4,
    club: "Bonus Class",
    title: "Art of the Drop with Ely",
    date: "Wed, May 13",
    time: "6:30 PM",
    spots: "5 spots left",
    location: "Addy’s Classroom",
    status: "RSVP Open",
    formLink: "https://forms.google.com",
  },
];

const clubhouseFeed = [
  {
    id: 1,
    author: "Tyler",
    role: "Club Director",
    badge: "Announcement",
    icon: "📣",
    time: "2 hours ago",
    content:
      "We were just offered an extremely limited 2009 vintage Champagne allocation. Wine Club members get first access before public release.",
    likes: 18,
    comments: 6,
  },
  {
    id: 2,
    author: "Jim Curry",
    role: "Wine Club Instructor",
    badge: "Jim’s Notes",
    icon: "🍷",
    time: "Yesterday",
    content:
      "The Rioja lineup this month may be one of my favorite classes we’ve done in years. Faustino showed beautifully with food.",
    likes: 24,
    comments: 9,
  },
  {
    id: 3,
    author: "Ryan",
    role: "Spirits Specialist",
    badge: "Staff Pick",
    icon: "🥃",
    time: "Yesterday",
    content:
      "Just tasted through a few upcoming bourbon barrel picks. One of them might be the best value whiskey we’ve brought in all year.",
    likes: 31,
    comments: 12,
  },
];

const staffContacts = [
  {
    id: "tyler",
    name: "Tyler",
    role: "Club Director / Buyer",
    icon: "📝",
    status: "Best for rare bottles, club questions, app help, and general requests.",
    lastMessage: "Absolutely, I can check on that bottle for you.",
  },
  {
    id: "ryan",
    name: "Ryan",
    role: "Spirits Specialist",
    icon: "🥃",
    status: "Best for whiskey, tequila, bourbon picks, and Spirits Club questions.",
    lastMessage: "That would be a great bottle for Old Fashioneds.",
  },
  {
    id: "jim",
    name: "Jim Curry",
    role: "Wine Club Instructor",
    icon: "🍷",
    status: "Best for wine education, pairing questions, and class follow-up.",
    lastMessage: "Rioja and lamb is a classic pairing for a reason.",
  },
  {
    id: "mike-derek",
    name: "Mike & Derek",
    role: "Spirits Club Hosts",
    icon: "🍸",
    status: "Best for cocktails, spirits education, and class questions.",
    lastMessage: "Try adding a touch more bitters and less simple syrup.",
  },
];

const offers = [
  {
    title: "Rare Champagne Allocation",
    detail: "2009 vintage Champagne available to Wine Club members first. Limited bottles statewide.",
    price: "$200 / bottle",
    badge: "Rare Offer",
  },
  {
    title: "Member Early Access",
    detail: "Club members get first notice on allocated whiskey and cellar releases.",
    price: "Members Only",
    badge: "Early Access",
  },
];

const expertNotes = [
  {
    author: "Jim’s Notes",
    role: "Wine Club Education",
    icon: "🍷",
    title: "Rioja: Faustino & the Classics of Spain",
    detail: "Producer background, region notes, tasting takeaways, and food pairing thoughts.",
  },
  {
    author: "Tyler’s Notes",
    role: "Buyer Picks & Club Updates",
    icon: "📝",
    title: "What I’m Excited About This Month",
    detail: "Rare bottles, upcoming offers, club reminders, and bottles worth grabbing after class.",
  },
  {
    author: "Mike’s Notes",
    role: "Spirits Club Commentary",
    icon: "🥃",
    title: "Whiskey Flavor Breakdown",
    detail: "Easy-to-follow notes on proof, mashbill, barrel influence, and cocktail use.",
  },
  {
    author: "Derek’s Notes",
    role: "Cocktails & Spirits Education",
    icon: "🍸",
    title: "How Spirits Work Together",
    detail: "Cocktail structure, balance, bitters, modifiers, and why certain spirits pair well.",
  },
  {
    author: "Ryan’s Notes",
    role: "Spirits Specialist Picks",
    icon: "🔥",
    title: "Staff Picks & Hidden Gems",
    detail: "Ryan’s bottle picks, value finds, and spirits worth paying attention to.",
  },
];

const tastingBottles = [
  {
    id: "rioja-1",
    name: "Faustino Gran Reserva Rioja",
    category: "Wine Club",
    className: "Rioja Night",
    details: "Tempranillo-based Rioja with oak, cherry, leather, vanilla, and classic Spanish structure.",
  },
  {
    id: "rioja-2",
    name: "Faustino Crianza Rioja",
    category: "Wine Club",
    className: "Rioja Night",
    details: "Bright red fruit, gentle oak, approachable tannins, and an easy food-friendly finish.",
  },
  {
    id: "whiskey-1",
    name: "Approachable Scotch Pick",
    category: "Spirits Club",
    className: "Scotch vs. Irish Whiskey",
    details: "Soft malt, honey, orchard fruit, light smoke, and a smooth finish.",
  },
];

const calendarLink =
  "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&src=MDFlOTk1MTEzOWM2NzliYzQ5NWRjNzJmOGE2ZjdiOTZjNGNiZjIzNjI5MDRkYWE3ZDJjODlmMzM1ZjFkN2NjZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NWE3NDg4MjlkNzY3OWQzMGJhZTYwODM4ZDhjMjYzZjkwYmU1ZDJlM2QwMDM3YjQ1YmU3OGNmZmU0Mjg5ZDliY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237986cb&color=%23d50000";

function AppButton({ children, onClick, href }) {
  const style = {
    display: "block",
    width: "100%",
    padding: "12px 14px",
    borderRadius: 14,
    background: burgundy,
    color: "white",
    border: "none",
    fontWeight: 700,
    textAlign: "center",
    textDecoration: "none",
    cursor: "pointer",
  };

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" style={style}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
}

function BrandLogo({ light = false, compact = false }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <img
        src={logoUrl}
        alt="Addy’s Fine Wine & Spirits"
        style={{
          width: compact ? 92 : 138,
          height: "auto",
          background: "rgba(255,255,255,.92)",
          borderRadius: 14,
          padding: compact ? 4 : 6,
        }}
      />
      {!compact ? (
        <div>
          <div style={{ color: light ? "white" : burgundy, fontSize: 12, fontWeight: 900, letterSpacing: 1.2, textTransform: "uppercase" }}>
            Addy’s Clubhouse
          </div>
          <div style={{ color: light ? "rgba(255,255,255,.75)" : "#777", fontSize: 12 }}>
            Wine & Spirits Club
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Card({ children, style = {} }) {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid #e5e1dc",
        borderRadius: 22,
        padding: 16,
        boxShadow: "0 8px 22px rgba(0,0,0,.06)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function EventCard({ event }) {
  return (
    <Card>
      <div style={{ display: "flex", gap: 12 }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 16,
            background: blush,
            display: "grid",
            placeItems: "center",
            fontSize: 22,
          }}
        >
          {event.club === "Spirits Club" ? "🥃" : event.club === "Bonus Class" ? "⭐" : "🍷"}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
            <div style={{ color: burgundy, fontSize: 12, fontWeight: 800, textTransform: "uppercase" }}>
              {event.club}
            </div>
            <div
              style={{
                background: "#f3f3f3",
                borderRadius: 999,
                padding: "4px 8px",
                fontSize: 11,
                fontWeight: 700,
                whiteSpace: "nowrap",
              }}
            >
              {event.spots}
            </div>
          </div>
          <h3 style={{ margin: "8px 0 10px", fontSize: 16, lineHeight: 1.25 }}>{event.title}</h3>
          <div style={{ color: "#666", fontSize: 14, lineHeight: 1.7 }}>
            <div>📅 {event.date}</div>
            <div>🕕 {event.time}</div>
            <div>📍 {event.location}</div>
          </div>
          <div style={{ marginTop: 14 }}>
            <AppButton href={event.formLink}>{event.status}</AppButton>
          </div>
        </div>
      </div>
    </Card>
  );
}

function FeedPost({ post }) {
  return (
    <Card>
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: 18,
            background: blush,
            display: "grid",
            placeItems: "center",
            fontSize: 24,
            flexShrink: 0,
          }}
        >
          {post.icon}
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "center" }}>
            <div>
              <div style={{ fontWeight: 900, fontSize: 15 }}>{post.author}</div>
              <div style={{ color: "#777", fontSize: 12 }}>{post.role}</div>
            </div>

            <div
              style={{
                background: blush,
                color: burgundy,
                borderRadius: 999,
                padding: "5px 10px",
                fontSize: 11,
                fontWeight: 900,
                whiteSpace: "nowrap",
              }}
            >
              {post.badge}
            </div>
          </div>

          <div style={{ color: "#999", fontSize: 12, marginTop: 4 }}>{post.time}</div>

          <p style={{ margin: "12px 0", lineHeight: 1.55, color: "#444", fontSize: 14 }}>
            {post.content}
          </p>

          <div style={{ display: "flex", gap: 10 }}>
            <button
              style={{
                border: 0,
                background: "#f4f1ed",
                borderRadius: 12,
                padding: "8px 12px",
                fontWeight: 700,
                color: burgundy,
                cursor: "pointer",
              }}
            >
              ❤️ {post.likes}
            </button>

            <button
              style={{
                border: 0,
                background: "#f4f1ed",
                borderRadius: 12,
                padding: "8px 12px",
                fontWeight: 700,
                color: burgundy,
                cursor: "pointer",
              }}
            >
              💬 {post.comments}
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}

function HomeScreen({ setActiveTab }) {
  return (
    <div style={{ paddingBottom: 92 }}>
      <div
        style={{
          background: `linear-gradient(135deg, ${darkBurgundy}, ${burgundy}, #16070d)`,
          color: "white",
          padding: "28px 20px 26px",
          borderBottomLeftRadius: 34,
          borderBottomRightRadius: 34,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <BrandLogo light />
          <div style={{ fontSize: 26 }}>🔔</div>
        </div>

        <div
          style={{
            marginTop: 22,
            background: "rgba(255,255,255,.12)",
            borderRadius: 24,
            padding: 16,
          }}
        >
          <div style={{ opacity: 0.75, fontSize: 12, fontWeight: 800, textTransform: "uppercase" }}>Addy’s Member Exclusive</div>
          <h2 style={{ margin: "8px 0", fontSize: 22, lineHeight: 1.15 }}>2009 Vintage Champagne Allocation</h2>
          <p style={{ margin: 0, opacity: 0.85, fontSize: 14 }}>Extremely limited bottles available for Wine Club members first.</p>
          <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
            {["$200", "Rare", "Act Fast"].map((item) => (
              <span key={item} style={{ background: "rgba(255,255,255,.12)", borderRadius: 999, padding: "6px 10px", fontSize: 12 }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: 20 }}>
        <SectionHeader title="Clubhouse Feed" />

        <div style={{ display: "grid", gap: 12 }}>
          {clubhouseFeed.map((post) => (
            <FeedPost key={post.id} post={post} />
          ))}
        </div>
      </div>

      <div style={{ padding: 20 }}>
        <SectionHeader title="Upcoming Classes" action="See all" onAction={() => setActiveTab("calendar")} />
        <div style={{ display: "grid", gap: 12 }}>
          {events.slice(0, 2).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      <div style={{ padding: "0 20px" }}>
        <SectionHeader title="Clubhouse Tools" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <ToolCard icon="🎟️" title="Digital Card" subtitle="Show at checkout" />
          <ToolCard icon="👥" title="Referrals" subtitle="$50 credit tracker" />
          <ToolCard icon="📚" title="Club Notes" subtitle="Jim, Tyler & Spirits Team" />
          <ToolCard icon="🎁" title="Offers" subtitle="Club exclusives" />
          <ToolCard icon="💬" title="Staff DMs" subtitle="Message Tyler, Ryan & team" />
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title, action, onAction }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
      <h2 style={{ margin: 0, fontSize: 20 }}>{title}</h2>
      {action ? (
        <button onClick={onAction} style={{ border: 0, background: "transparent", color: burgundy, fontWeight: 800 }}>
          {action}
        </button>
      ) : null}
    </div>
  );
}

function CalendarScreen() {
  return (
    <div style={{ padding: 20, paddingBottom: 92 }}>
      <h1 style={{ margin: "0 0 6px", fontSize: 28 }}>Club Calendar</h1>
      <p style={{ margin: "0 0 18px", color: "#666", lineHeight: 1.5 }}>
        The final site can connect to your live Google Calendar. For this preview, the events are shown as clean app cards.
      </p>

      <Card style={{ marginBottom: 16 }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div style={{ width: 48, height: 48, borderRadius: 18, background: blush, display: "grid", placeItems: "center", fontSize: 24 }}>📅</div>
          <div>
            <h3 style={{ margin: 0 }}>Live Google Calendar</h3>
            <p style={{ margin: "4px 0 0", color: "#666", fontSize: 14 }}>Wine & Spirits Club calendars connected.</p>
          </div>
        </div>
        <div style={{ marginTop: 14 }}>
          <AppButton href={calendarLink}>Open Live Calendar</AppButton>
        </div>
      </Card>

      <div style={{ display: "grid", gap: 12 }}>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

function OffersScreen() {
  return (
    <div style={{ padding: 20, paddingBottom: 92 }}>
      <h1 style={{ margin: "0 0 6px", fontSize: 28 }}>Member Offers</h1>
      <p style={{ margin: "0 0 18px", color: "#666" }}>Rare bottles, early access, and club-only opportunities.</p>
      <div style={{ display: "grid", gap: 12 }}>
        {offers.map((offer) => (
          <Card key={offer.title}>
            <span style={{ background: blush, color: burgundy, borderRadius: 999, padding: "6px 10px", fontSize: 12, fontWeight: 800 }}>
              {offer.badge}
            </span>
            <h3 style={{ margin: "14px 0 6px", fontSize: 20 }}>{offer.title}</h3>
            <p style={{ color: "#666", lineHeight: 1.5 }}>{offer.detail}</p>
            <strong>{offer.price}</strong>
          </Card>
        ))}
      </div>
    </div>
  );
}

function MessagesScreen() {
  const [selectedStaff, setSelectedStaff] = useState(staffContacts[0]);
  const [message, setMessage] = useState("");
  const [attachedPhotos, setAttachedPhotos] = useState([]);

  const removePhoto = (photoIndex) => {
    setAttachedPhotos(attachedPhotos.filter((_, index) => index !== photoIndex));
  };

  const sendMessage = () => {
    setMessage("");
    setAttachedPhotos([]);
  };

  return (
    <div style={{ padding: 20, paddingBottom: 92 }}>
      <BrandLogo compact />
      <h1 style={{ margin: "16px 0 6px", fontSize: 28 }}>Clubhouse DMs</h1>
      <p style={{ margin: "0 0 18px", color: "#666", lineHeight: 1.5 }}>
        Members can privately message approved Addy’s staff for bottle requests, pairing help, class follow-ups, and photo-based questions.
      </p>

      <Card style={{ marginBottom: 14, background: "#fffaf0", border: `1px solid ${gold}` }}>
        <h3 style={{ margin: "0 0 6px" }}>Controlled Messaging</h3>
        <p style={{ margin: 0, color: "#666", fontSize: 14, lineHeight: 1.45 }}>
          Members can DM staff, but not other members. They can also attach photos for bottle recommendations, food pairings, damaged items, or shelf pictures.
        </p>
      </Card>

      <div style={{ display: "grid", gap: 10, marginBottom: 14 }}>
        {staffContacts.map((staff) => {
          const active = selectedStaff.id === staff.id;
          return (
            <button
              key={staff.id}
              onClick={() => setSelectedStaff(staff)}
              style={{
                textAlign: "left",
                border: active ? `2px solid ${burgundy}` : "1px solid #e5e1dc",
                background: "white",
                borderRadius: 20,
                padding: 14,
                cursor: "pointer",
                boxShadow: "0 8px 22px rgba(0,0,0,.04)",
              }}
            >
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <div style={{ width: 44, height: 44, borderRadius: 16, background: blush, display: "grid", placeItems: "center", fontSize: 23 }}>
                  {staff.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                    <strong>{staff.name}</strong>
                    <span style={{ color: active ? burgundy : "#999", fontSize: 12, fontWeight: 800 }}>{active ? "Open" : "DM"}</span>
                  </div>
                  <div style={{ color: "#777", fontSize: 12, marginTop: 2 }}>{staff.role}</div>
                  <div style={{ color: "#666", fontSize: 13, marginTop: 6, lineHeight: 1.35 }}>{staff.status}</div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <Card>
        <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: 16, background: blush, display: "grid", placeItems: "center", fontSize: 23 }}>
            {selectedStaff.icon}
          </div>
          <div>
            <h3 style={{ margin: 0 }}>Message {selectedStaff.name}</h3>
            <p style={{ margin: "3px 0 0", color: "#777", fontSize: 13 }}>{selectedStaff.role}</p>
          </div>
        </div>

        <div style={{ background: "#f4f1ed", borderRadius: 16, padding: 12, color: "#555", fontSize: 14, lineHeight: 1.45, marginBottom: 12 }}>
          <strong>Recent reply:</strong> {selectedStaff.lastMessage}
        </div>

        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={`Write a message to ${selectedStaff.name}...`}
          style={{
            width: "100%",
            minHeight: 96,
            borderRadius: 16,
            border: "1px solid #ddd6cf",
            padding: 12,
            boxSizing: "border-box",
            fontFamily: "Arial, sans-serif",
            fontSize: 14,
            resize: "vertical",
            outlineColor: burgundy,
          }}
        />

        <label
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            border: `2px dashed ${burgundy}`,
            borderRadius: 16,
            padding: "14px 12px",
            marginTop: 12,
            cursor: "pointer",
            background: blush,
            color: burgundy,
            fontWeight: 900,
          }}
        >
          📸 Add Photos
          <input
            type="file"
            multiple
            accept="image/*"
            style={{ display: "none" }}
            onChange={(event) => {
              const files = Array.from(event.target.files || []);
              setAttachedPhotos([...attachedPhotos, ...files]);
            }}
          />
        </label>

        {attachedPhotos.length > 0 ? (
          <div style={{ marginTop: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 900, color: "#555", marginBottom: 8 }}>
              Attached Photos
            </div>
            <div style={{ display: "grid", gap: 8 }}>
              {attachedPhotos.map((file, index) => (
                <div
                  key={`${file.name}-${index}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: "#f4f1ed",
                    borderRadius: 16,
                    padding: 10,
                  }}
                >
                  <div style={{ width: 42, height: 42, borderRadius: 14, background: "white", display: "grid", placeItems: "center", fontSize: 22 }}>
                    🖼️
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <strong style={{ display: "block", fontSize: 13, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {file.name}
                    </strong>
                    <span style={{ color: "#777", fontSize: 12 }}>Ready to send</span>
                  </div>
                  <button
                    onClick={() => removePhoto(index)}
                    style={{
                      border: 0,
                      background: "white",
                      color: burgundy,
                      borderRadius: 12,
                      padding: "7px 9px",
                      fontWeight: 900,
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div style={{ marginTop: 12 }}>
          <button
            onClick={sendMessage}
            style={{
              width: "100%",
              border: 0,
              borderRadius: 14,
              padding: "12px 14px",
              background: burgundy,
              color: "white",
              fontWeight: 900,
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </div>
      </Card>
    </div>
  );
}

function StarRating({ rating, setRating }) {
  return (
    <div style={{ display: "flex", gap: 4, marginTop: 10 }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => setRating(star)}
          style={{
            border: 0,
            background: "transparent",
            cursor: "pointer",
            fontSize: 24,
            color: star <= rating ? gold : "#d6d0c7",
            padding: 0,
          }}
          aria-label={`${star} star rating`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

function BottleNoteCard({ bottle }) {
  const [rating, setRating] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const [note, setNote] = useState("");

  return (
    <Card>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <div>
          <div style={{ color: burgundy, fontSize: 12, fontWeight: 900, textTransform: "uppercase" }}>{bottle.category}</div>
          <h3 style={{ margin: "6px 0 4px", fontSize: 18 }}>{bottle.name}</h3>
          <p style={{ margin: "0 0 8px", color: "#777", fontSize: 13 }}>{bottle.className}</p>
        </div>
        <button
          onClick={() => setFavorite(!favorite)}
          style={{
            border: 0,
            background: favorite ? blush : "#f4f1ed",
            color: favorite ? burgundy : "#777",
            borderRadius: 14,
            width: 44,
            height: 44,
            fontSize: 22,
            cursor: "pointer",
          }}
          aria-label="Favorite bottle"
        >
          {favorite ? "♥" : "♡"}
        </button>
      </div>

      <p style={{ color: "#666", fontSize: 14, lineHeight: 1.45 }}>{bottle.details}</p>

      <div style={{ marginTop: 12 }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: "#333" }}>Your Rating</div>
        <StarRating rating={rating} setRating={setRating} />
      </div>

      <div style={{ marginTop: 14 }}>
        <label style={{ display: "block", fontSize: 13, fontWeight: 800, color: "#333", marginBottom: 6 }}>
          Your Private Notes
        </label>
        <textarea
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Example: Loved this with steak. Buy again for the holidays."
          style={{
            width: "100%",
            minHeight: 92,
            borderRadius: 16,
            border: "1px solid #ddd6cf",
            padding: 12,
            boxSizing: "border-box",
            fontFamily: "Arial, sans-serif",
            fontSize: 14,
            resize: "vertical",
            outlineColor: burgundy,
          }}
        />
      </div>

      <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
        <button
          style={{
            flex: 1,
            border: 0,
            borderRadius: 14,
            padding: "11px 12px",
            background: burgundy,
            color: "white",
            fontWeight: 800,
            cursor: "pointer",
          }}
        >
          Save Note
        </button>
        <button
          style={{
            border: "1px solid #ddd6cf",
            borderRadius: 14,
            padding: "11px 12px",
            background: "white",
            color: burgundy,
            fontWeight: 800,
            cursor: "pointer",
          }}
        >
          Buy Again
        </button>
      </div>
    </Card>
  );
}

function NotesScreen() {
  const [notesView, setNotesView] = useState("expert");

  return (
    <div style={{ padding: 20, paddingBottom: 92 }}>
      <div style={{ marginBottom: 18 }}>
        <BrandLogo compact />
        <h1 style={{ margin: "16px 0 6px", fontSize: 28 }}>Club Notes</h1>
        <p style={{ margin: 0, color: "#666", lineHeight: 1.5 }}>
          Expert class notes plus each member’s own private tasting journal.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
        <button
          onClick={() => setNotesView("expert")}
          style={{
            border: 0,
            borderRadius: 14,
            padding: "11px 10px",
            background: notesView === "expert" ? burgundy : "white",
            color: notesView === "expert" ? "white" : burgundy,
            fontWeight: 900,
            cursor: "pointer",
          }}
        >
          Expert Notes
        </button>
        <button
          onClick={() => setNotesView("personal")}
          style={{
            border: 0,
            borderRadius: 14,
            padding: "11px 10px",
            background: notesView === "personal" ? burgundy : "white",
            color: notesView === "personal" ? "white" : burgundy,
            fontWeight: 900,
            cursor: "pointer",
          }}
        >
          My Notes
        </button>
      </div>

      {notesView === "expert" ? (
        <>
          <Card style={{ marginBottom: 14, background: `linear-gradient(135deg, ${darkBurgundy}, ${burgundy})`, color: "white", border: 0 }}>
            <div style={{ fontSize: 13, opacity: 0.75, fontWeight: 800, textTransform: "uppercase" }}>Featured Section</div>
            <h2 style={{ margin: "8px 0 6px", fontSize: 22 }}>Jim’s Notes</h2>
            <p style={{ margin: 0, opacity: 0.85, lineHeight: 1.5 }}>
              Wine Club recaps, producer stories, food pairings, vintage notes, and quick takeaways from class.
            </p>
          </Card>

          <div style={{ display: "grid", gap: 12 }}>
            {expertNotes.map((note) => (
              <Card key={note.author}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 46, height: 46, borderRadius: 18, background: blush, display: "grid", placeItems: "center", fontSize: 24 }}>
                    {note.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: burgundy, fontSize: 12, fontWeight: 900, textTransform: "uppercase" }}>{note.author}</div>
                    <div style={{ color: "#777", fontSize: 13, marginTop: 2 }}>{note.role}</div>
                    <h3 style={{ margin: "8px 0 4px", fontSize: 17 }}>{note.title}</h3>
                    <p style={{ margin: 0, color: "#666", fontSize: 14, lineHeight: 1.45 }}>{note.detail}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </>
      ) : (
        <>
          <Card style={{ marginBottom: 14, background: "#fffaf0", border: `1px solid ${gold}` }}>
            <h2 style={{ margin: "0 0 6px", fontSize: 20 }}>My Tasting Journal</h2>
            <p style={{ margin: 0, color: "#666", lineHeight: 1.45 }}>
              Members can rate each wine or spirit, write private notes, favorite bottles, and remember what they want to buy again.
            </p>
          </Card>
          <div style={{ display: "grid", gap: 12 }}>
            {tastingBottles.map((bottle) => (
              <BottleNoteCard key={bottle.id} bottle={bottle} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProfileScreen() {
  return (
    <div style={{ padding: 20, paddingBottom: 92 }}>
      <BrandLogo compact />
      <h1 style={{ margin: "16px 0 6px", fontSize: 28 }}>Member Profile</h1>
      <p style={{ margin: "0 0 18px", color: "#666" }}>Your club status, membership card, and referral progress.</p>

      <Card style={{ background: `linear-gradient(135deg, ${darkBurgundy}, ${burgundy}, #16070d)`, color: "white", border: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p style={{ margin: 0, opacity: 0.7 }}>2026 Member Card</p>
            <h2 style={{ margin: "6px 0 0", fontSize: 26 }}>Addy’s Club Member</h2>
          </div>
          <div style={{ fontSize: 28 }}>✅</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 22 }}>
          <div style={{ background: "rgba(255,255,255,.12)", borderRadius: 16, padding: 12 }}>
            <div style={{ opacity: 0.65, fontSize: 13 }}>Membership</div>
            <strong>Wine + Spirits</strong>
          </div>
          <div style={{ background: "rgba(255,255,255,.12)", borderRadius: 16, padding: 12 }}>
            <div style={{ opacity: 0.65, fontSize: 13 }}>Discount</div>
            <strong>Active</strong>
          </div>
        </div>
        <div style={{ background: "white", color: "#111", borderRadius: 18, padding: 18, textAlign: "center", marginTop: 18 }}>
          <div style={{ fontSize: 48 }}>▦</div>
          <strong>Scan at checkout</strong>
        </div>
      </Card>

      <Card style={{ marginTop: 14 }}>
        <h3 style={{ margin: 0 }}>Referral Credits</h3>
        <p style={{ marginBottom: 0, color: "#666" }}>2 referrals tracked • $100 saved</p>
      </Card>
    </div>
  );
}

function ToolCard({ icon, title, subtitle }) {
  return (
    <Card>
      <div style={{ fontSize: 24 }}>{icon}</div>
      <h3 style={{ margin: "10px 0 4px", fontSize: 16 }}>{title}</h3>
      <p style={{ margin: 0, color: "#666", fontSize: 14 }}>{subtitle}</p>
    </Card>
  );
}

const tabs = [
  { id: "home", label: "Feed", icon: "📣" },
  { id: "calendar", label: "Calendar", icon: "📅" },
  { id: "offers", label: "Offers", icon: "🎁" },
  { id: "notes", label: "Notes", icon: "📚" },
  { id: "messages", label: "DMs", icon: "💬" },
];

function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  
const handleLogin = async () => {
  const normalizedEmail = email.trim().toLowerCase();

  try {
    // First: authenticate user
    const { data: authData, error: authError } =
      await supabase.auth.signInWithPassword({
        email: normalizedEmail,
        password,
      });

    if (authError || !authData.user) {
      setShowMessage(true);
      return;
    }

    // Second: verify member is active
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/members?email=eq.${normalizedEmail}&status=eq.active`,
      {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
      }
    );

    const members = await response.json();

    if (members.length > 0) {
      onLogin();
    } else {
      setShowMessage(true);
    }
  } catch (error) {
    console.error(error);
    setShowMessage(true);
  }
};

  return (
    <div style={{ minHeight: "100vh", background: `linear-gradient(135deg, ${darkBurgundy}, ${burgundy}, #16070d)`, display: "grid", placeItems: "center", padding: 20, boxSizing: "border-box" }}>
      <div style={{ width: "100%", maxWidth: 430 }}>
        <Card style={{ borderRadius: 30, padding: 22 }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
            <BrandLogo compact />
          </div>

          <h1 style={{ margin: "0 0 6px", textAlign: "center", fontSize: 28 }}>Welcome to Addy’s Clubhouse</h1>
          <p style={{ margin: "0 0 20px", textAlign: "center", color: "#666", lineHeight: 1.5 }}>
            Member access only. Sign in with the email attached to your Wine Club or Spirits Club membership.
          </p>

          <label style={{ display: "block", fontSize: 13, fontWeight: 900, marginBottom: 6 }}>Email</label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            style={{ width: "100%", borderRadius: 16, border: "1px solid #ddd6cf", padding: 13, boxSizing: "border-box", fontSize: 15, marginBottom: 12, outlineColor: burgundy }}
          />

          <label style={{ display: "block", fontSize: 13, fontWeight: 900, marginBottom: 6 }}>Temporary Password</label>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter temporary password"
            type="password"
            style={{ width: "100%", borderRadius: 16, border: "1px solid #ddd6cf", padding: 13, boxSizing: "border-box", fontSize: 15, marginBottom: 14, outlineColor: burgundy }}
          />

          {showMessage ? (
            <div style={{ background: "#fff1f1", color: "#8a1f1f", borderRadius: 16, padding: 12, fontSize: 14, lineHeight: 1.45, marginBottom: 14 }}>
              This email is not currently approved for member access, or the password is incorrect. Please contact Addy’s if you believe this is an error.
            </div>
          ) : null}

          <AppButton onClick={handleLogin}>Sign In</AppButton>

          <button style={{ width: "100%", border: 0, background: "transparent", color: burgundy, fontWeight: 900, marginTop: 14, cursor: "pointer" }}>
            Forgot or change password
          </button>

          <div style={{ marginTop: 18, background: "#fffaf0", border: `1px solid ${gold}`, borderRadius: 18, padding: 13 }}>
            <strong style={{ display: "block", marginBottom: 4 }}>How members get access</strong>
            <p style={{ margin: 0, color: "#666", fontSize: 14, lineHeight: 1.45 }}>
              Admin uploads the member spreadsheet, approved emails are invited, and each member receives a temporary password they can change after login.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default function AddysClubhousePrototype() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  }

  let screen = <HomeScreen setActiveTab={setActiveTab} />;
  if (activeTab === "calendar") screen = <CalendarScreen />;
  if (activeTab === "offers") screen = <OffersScreen />;
  if (activeTab === "notes") screen = <NotesScreen />;
  if (activeTab === "profile") screen = <ProfileScreen />;
  if (activeTab === "messages") screen = <MessagesScreen />;

  return (
    <div style={{ minHeight: "100vh", background: "#e9e5df", fontFamily: "Arial, sans-serif", color: "#111" }}>
      <div style={{ maxWidth: 430, minHeight: "100vh", margin: "0 auto", background: cream, position: "relative", boxShadow: "0 0 35px rgba(0,0,0,.18)" }}>
        {screen}

        <div
          style={{
            position: "fixed",
            left: "50%",
            bottom: 0,
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: 430,
            background: "rgba(255,255,255,.96)",
            borderTop: "1px solid #ddd",
            padding: 8,
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6 }}>
            {tabs.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    border: 0,
                    borderRadius: 14,
                    padding: "8px 4px",
                    background: active ? burgundy : "transparent",
                    color: active ? "white" : "#666",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  <div style={{ fontSize: 18 }}>{tab.icon}</div>
                  <div style={{ fontSize: 11 }}>{tab.label}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
