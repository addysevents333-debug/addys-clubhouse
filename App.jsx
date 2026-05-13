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



const staffContacts = [
  {
    id: "tyler",
    name: "Tyler",
    email: "addysevents333@gmail.com",
    role: "Club Director",
    icon: "📝",
    status: "Best for rare bottles, club questions, app help, and general requests.",
    lastMessage: "Absolutely, I can check on that bottle for you.",
  },
  {
    id: "ryan",
    name: "Ryan",
    email: "ryan.orzechaddys@gmail.com",
    role: "Spirits Specialist",
    icon: "🥃",
    status: "Best for whiskey, tequila, bourbon picks, and Spirits Club questions.",
    lastMessage: "That would be a great bottle for Old Fashioneds.",
  },
  {
    id: "jim",
    name: "Jim Curry",
    email: "jpcurry@aol.com",
    role: "Wine Club Instructor",
    icon: "🍷",
    status: "Best for wine education, pairing questions, and class follow-up.",
    lastMessage: "Rioja and lamb is a classic pairing for a reason.",
  },
  {
    id: "mike-derek",
    name: "Mike & Derek",
    email: "buffalohappyhourpodcast.com",
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
function AdminScreen() {
  const [author, setAuthor] = useState("Tyler");
  const [role, setRole] = useState("Club Director");
  const [badge, setBadge] = useState("Announcement");
  const [icon, setIcon] = useState("📣");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
const [members, setMembers] = useState([]);
  const [offerTitle, setOfferTitle] = useState("");
  const [offerDetail, setOfferDetail] = useState("");
  const [offerPrice, setOfferPrice] = useState("");
  const [offerBadge, setOfferBadge] = useState("Member Offer");
  const [memberSearch, setMemberSearch] = useState("");
  const [adminMessages, setAdminMessages] = useState([]);
  const [adminReply, setAdminReply] = useState("");
const [adminPosts, setAdminPosts] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const createPost = async () => {
    if (!content.trim()) {
      setMessage("Please write a post first.");
      const memberConversations = [
  ...new Map(
    adminMessages
      .filter((msg) => msg.sender_email !== "addysevents333@gmail.com")
      .map((msg) => [msg.sender_email, msg])
  ).values(),
];
      return;
    }

    const response = await fetch(`${SUPABASE_URL}/rest/v1/posts`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        author,
        role,
        badge,
        icon,
        content,
        likes: 0,
        comments: 0,
      }),
    });

    if (response.ok) {
      setContent("");
      setMessage("Post created. Go to Feed to view it.");
    } else {
      setMessage("Error creating post.");
    }
  };
const deletePost = async (id) => {
  const { error } = await supabase
    .from("posts")
    .delete()
    .eq("id", id);

  if (!error) {
    setMessage("Post deleted.");
  } else {
    setMessage("Error deleting post.");
  }
};
  const createOffer = async () => {
    if (!offerTitle.trim() || !offerDetail.trim()) {
      setMessage("Please add an offer title and details.");
      return;
    }

    const response = await fetch(`${SUPABASE_URL}/rest/v1/offers`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        title: offerTitle,
        detail: offerDetail,
        price: offerPrice,
        badge: offerBadge,
        image_url: "",
      }),
    });

    if (response.ok) {
      setOfferTitle("");
      setOfferDetail("");
      setOfferPrice("");
      setOfferBadge("Member Offer");
      setMessage("Offer created. Go to Offers to view it.");
    } else {
      setMessage("Error creating offer.");
    }
  };
useEffect(() => {
  loadMembers();
  loadAdminPosts();
  loadAdminMessages();

  const channel = supabase
    .channel("admin-messages-realtime")
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "messages",
      },
      () => {
        loadAdminMessages();
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}, []);
const loadMembers = async () => {
  const { data, error } = await supabase
    .from("members")
    .select("*")
    .order("last_name", { ascending: true });

  if (!error && data) {
    setMembers(data);
  }
};
const updateMemberStatus = async (email, newStatus) => {
  const { error } = await supabase
    .from("members")
    .update({ status: newStatus })
    .eq("email", email);

  if (!error) {
    loadMembers();
  } else {
    console.log(error);
  }
};
  const loadAdminPosts = async () => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("id", { ascending: false });

  if (!error && data) {
    setAdminPosts(data);
  }
};
  const loadAdminMessages = async () => {
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .order("created_at", { ascending: false });

  if (!error && data) {
    setAdminMessages(data);
  }
};
const sendAdminReply = async () => {
  if (!adminReply.trim() || !selectedConversation) return;

  const staffEmails = [
    "addysevents333@gmail.com",
    "staff@addys",
    "tyler@addys",
    "ryan@addys",
    "jim@addys",
    "spiritsclub@addys",
  ];

  const memberEmail = staffEmails.includes(selectedConversation.sender_email)
    ? selectedConversation.recipient_email
    : selectedConversation.sender_email;

  const { error } = await supabase
    .from("messages")
    .insert([
      {
        sender_email: selectedConversation.recipient_email,
        sender_name: "Addy's Staff",
        recipient_email: memberEmail,
        message: adminReply,
      },
    ]);

  if (!error) {
    setAdminReply("");
    loadAdminMessages();
  } else {
    alert("Reply failed: " + error.message);
  }
};
const filteredMembers = members.filter((member) => {
  const search = memberSearch.toLowerCase();

  return (
    member.first_name?.toLowerCase().includes(search) ||
    member.last_name?.toLowerCase().includes(search) ||
    member.email?.toLowerCase().includes(search) ||
    member.membership_type?.toLowerCase().includes(search)
  );
});

  return (
    <div style={{ padding: 20, paddingBottom: 92 }}>
      <BrandLogo compact />

      <h1 style={{ margin: "16px 0 6px", fontSize: 28 }}>
        Admin Portal
      </h1>

      <p style={{ margin: "0 0 18px", color: "#666", lineHeight: 1.5 }}>
        Manage Clubhouse content.
      </p>

      <Card>
        <h2 style={{ margin: "0 0 12px", fontSize: 22 }}>
          Create Feed Post
        </h2>

        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Write your Clubhouse update..."
          style={{
            width: "100%",
            minHeight: 120,
            borderRadius: 16,
            border: "1px solid #ddd6cf",
            padding: 13,
            boxSizing: "border-box",
            fontFamily: "Arial, sans-serif",
            fontSize: 15,
            marginBottom: 12,
          }}
        />

        <AppButton onClick={createPost}>
          Create Feed Post
        </AppButton>
      </Card>

      <Card style={{ marginTop: 16 }}>
        <h2 style={{ margin: "0 0 12px", fontSize: 22 }}>
          Create Member Offer
        </h2>

        <input
          value={offerTitle}
          onChange={(event) => setOfferTitle(event.target.value)}
          placeholder="Offer Title"
          style={{
            width: "100%",
            borderRadius: 16,
            border: "1px solid #ddd6cf",
            padding: 13,
            boxSizing: "border-box",
            fontSize: 15,
            marginBottom: 12,
          }}
        />

        <textarea
          value={offerDetail}
          onChange={(event) => setOfferDetail(event.target.value)}
          placeholder="Offer Details"
          style={{
            width: "100%",
            minHeight: 100,
            borderRadius: 16,
            border: "1px solid #ddd6cf",
            padding: 13,
            boxSizing: "border-box",
            fontFamily: "Arial, sans-serif",
            fontSize: 15,
            marginBottom: 12,
          }}
        />

        <input
          value={offerPrice}
          onChange={(event) => setOfferPrice(event.target.value)}
          placeholder="$200 / bottle"
          style={{
            width: "100%",
            borderRadius: 16,
            border: "1px solid #ddd6cf",
            padding: 13,
            boxSizing: "border-box",
            fontSize: 15,
            marginBottom: 12,
          }}
        />

        <AppButton onClick={createOffer}>
          Create Offer
        </AppButton>

        {message ? (
          <div
            style={{
              marginTop: 12,
              background: "#fffaf0",
              borderRadius: 14,
              padding: 12,
              color: "#555",
            }}
          >
            {message}
          </div>
        ) : null}
      </Card>
      <Card>
 <h2 style={{ margin: "0 0 12px", fontSize: 22 }}>
  Member Directory
</h2>

<input
  value={memberSearch}
  onChange={(event) => setMemberSearch(event.target.value)}
  placeholder="Search members..."
  style={{
    width: "100%",
    borderRadius: 14,
    border: "1px solid #ddd",
    padding: 12,
    boxSizing: "border-box",
    marginBottom: 14,
    fontSize: 14,
  }}
/>

<div style={{ display: "grid", gap: 10 }}>
  {filteredMembers.map((member) => (
      <div
        key={member.email}
        style={{
          padding: 12,
          border: "1px solid #ddd",
          borderRadius: 14,
          background: "#faf7f3",
        }}
      >
        <div style={{ fontWeight: 700 }}>
          {member.first_name} {member.last_name}
        </div>

        <div style={{ fontSize: 13, color: "#666" }}>
          {member.email}
        </div>

        <div style={{ marginTop: 6, fontSize: 13 }}>
          {member.membership_type} • {member.membership_year}
        </div>

       <div style={{ marginTop: 4, fontSize: 12 }}>
  Status: {member.status} | Role: {member.role}
</div>

<div style={{ display: "flex", gap: 8, marginTop: 10 }}>
  <button
    onClick={() => updateMemberStatus(member.email, "active")}
    style={{
      flex: 1,
      border: 0,
      borderRadius: 12,
      padding: "8px 10px",
      background: member.status === "active" ? "#1f7a45" : "#e7f7ec",
      color: member.status === "active" ? "white" : "#1f7a45",
      fontWeight: 700,
      cursor: "pointer",
    }}
  >
    Active
  </button>

  <button
    onClick={() => updateMemberStatus(member.email, "inactive")}
    style={{
      flex: 1,
      border: 0,
      borderRadius: 12,
      padding: "8px 10px",
      background: member.status === "inactive" ? "#8a1f1f" : "#fff1f1",
      color: member.status === "inactive" ? "white" : "#8a1f1f",
      fontWeight: 700,
      cursor: "pointer",
    }}
  >
    Inactive
  </button>
</div>
      </div>
    ))}
  </div>
</Card>
      <Card style={{ marginTop: 16 }}>
  <h2 style={{ margin: "0 0 12px", fontSize: 22 }}>
    Manage Feed Posts
  </h2>
<div style={{ marginBottom: 12 }}>
  Loaded Posts: {adminPosts.length}
</div>
  <div style={{ display: "grid", gap: 10 }}>
    {adminPosts.map((post) => (
      <div
        key={post.id}
        style={{
          padding: 12,
          border: "1px solid #ddd",
          borderRadius: 14,
          background: "#faf7f3",
        }}
      >
        <div style={{ fontWeight: 700 }}>
          {post.author}
        </div>

        <div style={{ marginTop: 6 }}>
          {post.content}
        </div>

        <button
          onClick={() => deletePost(post.id)}
          style={{
            marginTop: 12,
            border: 0,
            borderRadius: 12,
            padding: "10px 12px",
            background: "#8a1f1f",
            color: "white",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Delete Post
        </button>
      </div>
    ))}
  </div>
</Card>
      <Card style={{ marginTop: 16 }}>
  <h2 style={{ margin: "0 0 12px", fontSize: 22 }}>
    Admin DM Inbox
  </h2>

  <div style={{ display: "grid", gap: 10 }}>
    {[
  ...new Map(
adminMessages
  .filter((msg) => msg.sender_email !== "addysevents333@gmail.com")
  .map((msg) => [      msg.sender_name || msg.sender_email,
      msg,
    ])
  ).values(),
].map((msg) => (
      <div
  key={msg.id}
  onClick={async () => {
  setSelectedConversation(msg);

  await supabase
    .from("messages")
    .update({ is_read: true })
    .eq("sender_email", msg.sender_email);

  loadAdminMessages();
}}
  style={{
          padding: 12,
          cursor: "pointer",
border:
  selectedConversation?.sender_email === msg.sender_email
    ? `2px solid ${burgundy}`
    : "1px solid #ddd",
          borderRadius: 14,
          background: "#faf7f3",
        }}
      >
     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
  <span>
    Conversation with {msg.sender_name || msg.sender_email}
  </span>

  {!msg.is_read && (
    <div
      style={{
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: burgundy,
      }}
    />
  )}
</div>

        <div style={{ fontSize: 13, color: "#666", marginTop: 4 }}>
  Staff Conversation
</div>

        <div style={{ marginTop: 8 }}>
          {msg.message}
        </div>
      </div>
    ))}
  </div>
</Card>
      {selectedConversation ? (
  <Card style={{ marginTop: 16 }}>
    <h2 style={{ margin: "0 0 12px", fontSize: 22 }}>
      Reply to {selectedConversation.sender_name || selectedConversation.sender_email}
    </h2>

    <textarea
      value={adminReply}
      onChange={(event) => setAdminReply(event.target.value)}
      placeholder="Write your reply..."
      style={{
        width: "100%",
        minHeight: 100,
        borderRadius: 16,
        border: "1px solid #ddd6cf",
        padding: 12,
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
        fontSize: 14,
        marginBottom: 12,
      }}
    />

    <button
      onClick={sendAdminReply}
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
      Send Reply
    </button>
  </Card>
) : null}
    </div>
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

function HomeScreen({ setActiveTab, currentMember }) {
  const [clubhouseFeed, setClubhouseFeed] = useState([]);
  useEffect(() => {
  loadPosts();
}, []);

const loadPosts = async () => {
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/posts?select=*`,
    {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    }
  );

  const data = await response.json();
  setClubhouseFeed(data);
};
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
    background: "rgba(255,255,255,.12)",
    borderRadius: 16,
    padding: 12,
    marginTop: 12,
    color: "white",
  }}
>
  <div style={{ fontSize: 13, opacity: 0.8 }}>
    Logged in as
  </div>

  <div style={{ fontSize: 18, fontWeight: 800 }}>
    {currentMember?.first_name} {currentMember?.last_name}
  </div>

  <div style={{ fontSize: 13, marginTop: 4 }}>
    {currentMember?.membership_type} Member
  </div>
</div>
        <div
  style={{
    marginTop: 12,
    background: "#fff3cd",
    color: "#7a5a00",
    borderRadius: 16,
    padding: 12,
    fontSize: 13,
    lineHeight: 1.5,
    fontWeight: 600,
  }}
>
  🧪 Addy’s Clubhouse Beta — features and layouts may change as we improve the member experience. Please submit feedback through the Beta Feedback tool.
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
          <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSfIDTyHiSCDS5_Lupz7Ksb9qR5qphayTSKR1lIWU4kw5FUXkQ/viewform?usp=header"
  target="_blank"
  rel="noreferrer"
  style={{ textDecoration: "none" }}
>
  <ToolCard
    icon="🧪"
    title="Beta Feedback"
    subtitle="Tell us what to improve"
  />
</a>
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
  const [liveOffers, setLiveOffers] = useState([]);

  useEffect(() => {
    loadOffers();
  }, []);

  const loadOffers = async () => {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/offers?select=*`, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    });

    const data = await response.json();
    setLiveOffers(data);
  };

  return (
    <div style={{ padding: 20, paddingBottom: 92 }}>
      <h1 style={{ margin: "0 0 6px", fontSize: 28 }}>Member Offers</h1>
      <p style={{ margin: "0 0 18px", color: "#666" }}>
        Rare bottles, early access, and club-only opportunities.
      </p>

      <div style={{ display: "grid", gap: 12 }}>
        {liveOffers.map((offer) => (
          <Card key={offer.id}>
            <span
              style={{
                background: blush,
                color: burgundy,
                borderRadius: 999,
                padding: "6px 10px",
                fontSize: 12,
                fontWeight: 800,
              }}
            >
              {offer.badge}
            </span>

            <h3 style={{ margin: "14px 0 6px", fontSize: 20 }}>
              {offer.title}
            </h3>

            <p style={{ color: "#666", lineHeight: 1.5 }}>
              {offer.detail}
            </p>

            <strong>{offer.price}</strong>
          </Card>
        ))}
      </div>
    </div>
  );
}
function MessagesScreen({ currentMember }) {  const [selectedStaff, setSelectedStaff] = useState(staffContacts[0]);
  const [message, setMessage] = useState("");
  const [attachedPhotos, setAttachedPhotos] = useState([]);
  const [messages, setMessages] = useState([]);
const [newMessage, setNewMessage] = useState("");
  useEffect(() => {
  loadMessages();

  const channel = supabase
    .channel("messages-realtime")
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "messages",
      },
      () => {
        loadMessages();
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}, []);
const loadMessages = async () => {
 const { data, error } = await supabase
  .from("messages")
  .select("*")
  .or(`sender_email.eq.${currentMember?.email},recipient_email.eq.${currentMember?.email}`)
  .order("created_at", { ascending: true });

  if (!error && data) {
    setMessages(data);
  }
};
const sendMessage = async () => {
  if (!newMessage.trim() && attachedPhotos.length === 0) return;

  let imageUrl = "";

  if (attachedPhotos.length > 0) {
    const file = attachedPhotos[0];
    const filePath = `${Date.now()}-${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from("message-photos")
      .upload(filePath, file);

    if (uploadError) {
      alert("Photo upload failed: " + uploadError.message);
      return;
    }

    const { data } = supabase.storage
      .from("message-photos")
      .getPublicUrl(filePath);

    imageUrl = data.publicUrl;
  }

  const { error } = await supabase
    .from("messages")
    .insert([
      {
        sender_email: currentMember?.email,
        sender_name: `${currentMember?.first_name} ${currentMember?.last_name}`,
        recipient_email: selectedStaff.email,
        message: newMessage,
        image_url: imageUrl,
      },
    ]);

  if (!error) {
    setNewMessage("");
    setAttachedPhotos([]);
    loadMessages();
  } else {
    alert("Message failed: " + error.message);
  }
};
  const removePhoto = (photoIndex) => {
    setAttachedPhotos(attachedPhotos.filter((_, index) => index !== photoIndex));
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
            <h3 style={{ margin: 0 }}>{currentMember?.role === "admin"
  ? `Conversation with ${messages[0]?.sender_email || "Member"}`
  : `Message ${selectedStaff.name}`}</h3>
            <p style={{ margin: "3px 0 0", color: "#777", fontSize: 13 }}>{selectedStaff.role}</p>
          </div>
        </div>

<div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginBottom: 12,
  }}
>
{messages
  .filter((msg) => msg.recipient_email === selectedStaff.email)
  .map((msg) => (
    <div
      key={msg.id}
      style={{
        alignSelf:
          msg.sender_name || msg.sender_email=== currentMember?.email
            ? "flex-end"
            : "flex-start",
        background:
          msg.sender_name || msg.sender_email === currentMember?.email
            ? burgundy
            : "#ece7df",
        color:
          msg.sender_name || msg.sender_email === currentMember?.email
            ? "white"
            : "#111",
        borderRadius: 18,
        padding: 12,
        maxWidth: "80%",
      }}
    >
     {msg.message ? <div>{msg.message}</div> : null}

{msg.image_url ? (
  <img
    src={msg.image_url}
    alt="DM attachment"
    style={{
      marginTop: msg.message ? 8 : 0,
      maxWidth: "100%",
      borderRadius: 12,
      display: "block",
    }}
  />
) : null}
    </div>
  ))}
</div>

        <textarea
         value={newMessage}
onChange={(event) => setNewMessage(event.target.value)}
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

function ProfileScreen({ currentMember, onLogout }) {
  return (
    <div style={{ padding: 20, paddingBottom: 92 }}>
      <BrandLogo compact />

      <h1 style={{ margin: "16px 0 6px", fontSize: 28 }}>
        Member Profile
      </h1>

      <p style={{ margin: "0 0 18px", color: "#666" }}>
        Your Addy’s Clubhouse membership details.
      </p>

      <Card
        style={{
          background: `linear-gradient(135deg, ${darkBurgundy}, ${burgundy}, #16070d)`,
          color: "white",
          border: 0,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p style={{ margin: 0, opacity: 0.7 }}>Member Card</p>
            <h2 style={{ margin: "6px 0 0", fontSize: 26 }}>
              {currentMember?.first_name} {currentMember?.last_name}
            </h2>
          </div>

          <div style={{ fontSize: 28 }}>✅</div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10,
            marginTop: 22,
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,.12)",
              borderRadius: 16,
              padding: 12,
            }}
          >
            <div style={{ opacity: 0.65, fontSize: 13 }}>Membership</div>
            <strong>{currentMember?.membership_type || "Member"}</strong>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,.12)",
              borderRadius: 16,
              padding: 12,
            }}
          >
            <div style={{ opacity: 0.65, fontSize: 13 }}>Status</div>
            <strong>{currentMember?.status || "active"}</strong>
          </div>
        </div>

        <div
          style={{
            background: "white",
            color: "#111",
            borderRadius: 18,
            padding: 18,
            textAlign: "center",
            marginTop: 18,
          }}
        >
          <div style={{ fontSize: 48 }}>▦</div>
          <strong>Scan at checkout</strong>
          <p style={{ margin: "6px 0 0", fontSize: 13, color: "#666" }}>
            Digital member card placeholder
          </p>
        </div>
      </Card>

      <Card style={{ marginTop: 14 }}>
        <h3 style={{ margin: "0 0 8px" }}>Account Info</h3>

       <p style={{ margin: "6px 0", color: "#666" }}>
  <strong>Email:</strong> {currentMember?.email}
</p>

<p style={{ margin: "6px 0", color: "#666" }}>
  <strong>Membership Year:</strong> {currentMember?.membership_year || "Not listed"}
</p>

<p style={{ margin: "6px 0", color: "#666" }}>
  <strong>Phone:</strong> {currentMember?.phone || "Not added yet"}
</p>

<p style={{ margin: "6px 0", color: "#666" }}>
  <strong>Role:</strong> {currentMember?.role || "member"}
</p>
      </Card>

      <div style={{ marginTop: 14 }}>
        <AppButton onClick={onLogout}>Logout</AppButton>
      </div>
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
  { id: "profile", label: "Profile", icon: "👤" },
  { id: "admin", label: "Admin", icon: "⚙️" },
];

function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleLogin = async () => {
    const normalizedEmail = email.trim().toLowerCase();

    const { data: authData, error: authError } =
      await supabase.auth.signInWithPassword({
        email: normalizedEmail,
        password,
      });

    if (authError || !authData.user) {
      setShowMessage(true);
      return;
    }

    const { data: memberData, error: memberError } = await supabase
      .from("members")
      .select("email, role, first_name, last_name, membership_type, status")
      .eq("email", normalizedEmail)
      .single();

    if (memberError || !memberData || memberData.status !== "active") {
      console.log("Member lookup failed:", memberError, memberData);
      setShowMessage(true);
      return;
    }

    console.log("Logged in member:", memberData);

    localStorage.setItem(
      "addysMember",
      JSON.stringify(memberData)
    );

        onLogin(memberData);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${darkBurgundy}, ${burgundy}, #16070d)`,
        display: "grid",
        placeItems: "center",
        padding: 20,
        boxSizing: "border-box",
      }}
    >
      <div style={{ width: "100%", maxWidth: 430 }}>
        <Card style={{ borderRadius: 30, padding: 22 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 18,
            }}
          >
            <BrandLogo compact />
          </div>

          <h1
            style={{
              margin: "0 0 6px",
              textAlign: "center",
              fontSize: 28,
            }}
          >
            Welcome to Addy’s Clubhouse
          </h1>

          <p
            style={{
              margin: "0 0 20px",
              textAlign: "center",
              color: "#666",
              lineHeight: 1.5,
            }}
          >
            Member access only. Sign in with the email attached to your Wine Club or Spirits Club membership.
          </p>

          <label
            style={{
              display: "block",
              fontSize: 13,
              fontWeight: 900,
              marginBottom: 6,
            }}
          >
            Email
          </label>

          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            style={{
              width: "100%",
              borderRadius: 16,
              border: "1px solid #ddd6cf",
              padding: 13,
              boxSizing: "border-box",
              fontSize: 15,
              marginBottom: 12,
              outlineColor: burgundy,
            }}
          />

          <label
            style={{
              display: "block",
              fontSize: 13,
              fontWeight: 900,
              marginBottom: 6,
            }}
          >
            Temporary Password
          </label>

          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter temporary password"
            type="password"
            style={{
              width: "100%",
              borderRadius: 16,
              border: "1px solid #ddd6cf",
              padding: 13,
              boxSizing: "border-box",
              fontSize: 15,
              marginBottom: 14,
              outlineColor: burgundy,
            }}
          />

          {showMessage ? (
            <div
              style={{
                background: "#fff1f1",
                color: "#8a1f1f",
                borderRadius: 16,
                padding: 12,
                fontSize: 14,
                lineHeight: 1.45,
                marginBottom: 14,
              }}
            >
              This email is not currently approved for member access, or the password is incorrect.
            </div>
          ) : null}

          <AppButton onClick={handleLogin}>
            Sign In
          </AppButton>
        </Card>
      </div>
    </div>
  );
}

export default function AddysClubhousePrototype() {
  const savedMember = localStorage.getItem("addysMember");

  const [currentMember, setCurrentMember] = useState(
    savedMember ? JSON.parse(savedMember) : null
  );

  const [isLoggedIn, setIsLoggedIn] = useState(
    savedMember ? true : false
  );

 const [activeTab, setActiveTab] = useState("home");

const isAdmin =
  currentMember?.role?.trim().toLowerCase() === "admin";
  if (!isLoggedIn) {
    return (
      <LoginScreen
        onLogin={(member) => {
          localStorage.setItem("addysMember", JSON.stringify(member));
          setCurrentMember(member);
          setIsLoggedIn(true);
        }}
      />
    );
  }

 let screen = (
  <HomeScreen
    setActiveTab={setActiveTab}
    currentMember={currentMember}
  />
);
  if (activeTab === "calendar") screen = <CalendarScreen />;
  if (activeTab === "offers") screen = <OffersScreen />;
  if (activeTab === "notes") screen = <NotesScreen />;
  if (activeTab === "messages") {
  screen = <MessagesScreen currentMember={currentMember} />;
}
  if (activeTab === "profile") {
  screen = (
    <ProfileScreen
      currentMember={currentMember}
      onLogout={() => {
        localStorage.removeItem("addysMember");
        setCurrentMember(null);
        setIsLoggedIn(false);
        setActiveTab("home");
      }}
    />
  );
}
  if (activeTab === "admin" && isAdmin) screen = <AdminScreen />;
  const handleLogout = () => {
  localStorage.removeItem("addysMember");
  setCurrentMember(null);
  setIsLoggedIn(false);
};

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
          <div style={{ display: "grid", gridTemplateColumns: isAdmin ? "repeat(7, 1fr)" : "repeat(6, 1fr)", gap: 6 }}>
            {tabs
              .filter((tab) => tab.id !== "admin" || isAdmin)
              .map((tab) => {
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
