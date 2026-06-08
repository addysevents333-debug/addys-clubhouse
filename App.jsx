import React, { useEffect, useState } from "react";
import AddysLogo from "./src/Addys-Logo.png";
const SUPABASE_URL = "https://ztqtfftgtwgxrtoqqggx.supabase.co";
const SUPABASE_KEY = "sb_publishable_V3P46SsSqP3cj8-hensd9w_OYqIvuhC";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const burgundy = "#7b1734";
const darkBurgundy = "#4a0d20";
const cream = "#faf7f3";
const blush = "#f3e5ea";
const gold = "#c8a96a";
const logoUrl = AddysLogo; 
const events = [

   {
    id: 1,
    club: "Spirits Club",
    title: "Wood Analysis: Impact of Wood on Whiskey",
    date: "Mon, June 15",
    time: "6:30 PM",
    spots: "12 spots left",
    location: "Addy’s Classroom",
    status: "RSVP Open",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeAdseBx-uEuOtvNoWZXuKToCJjh-9Awoc46G37IcZrvnQ-zg/viewform?usp=header",
  },
  {
    id: 2,
    club: "Wine Bonus Class",
    title: "Paso Robles",
    date: "Thurs, June 18",
    time: "6:30 PM",
    spots: "8 spots left",
    location: "Addy’s Classroom",
    status: "RSVP Open",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdJENjnj2dChyRhZKru0iaXqToxgoxdWMGxPbYJ6xdEnaaa0w/viewform?usp=header",
  },
 
  {
    id: 3,
    club: "Spirits Bonus Class",
    title: "Fair Liqueurs",
    date: "Tues, June 23",
    time: "6:30 PM",
    spots: "25 Spots left",
    location: "Addy’s Classroom",
    status: "RSVP Open",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc4JoGpAih7qxZPayEt90LwZs0fEOC4lJ5TuPDHqF4aYQpRyg/viewform?usp=header",
  },
  {
    id: 4,
    club: "Wine Club",
    title: "French Whites",
    date: "Wed, June 24",
    time: "6:30 PM",
    spots: "15 spots left",
    location: "Addy’s Classroom",
    status: "RSVP Open",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdEEquqn0sFG3pnRi2uxDCvfyt99Pt7sDZjREIiL6EJG5VkZg/viewform?usp=header",
  },
   {
    id: 5,
    club: "Wine Club",
    title: "French Whites",
    date: "Thurs, June 25",
    time: "6:30 PM",
    spots: "16 spots left",
    location: "Addy’s Classroom",
    status: "RSVP Open",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLScadD5p-_khAVjPCxSvTs0ElDKPM2oAW-pIOk2M8_slWQS7Dw/viewform?usp=header",
  },
   {
    id: 6,
    club: "Wine Club",
    title: "French Whites",
    date: "Mon, June 29",
    time: "6:30 PM",
    spots: "18 spots left",
    location: "Addy’s Classroom",
    status: "RSVP Open",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdxvqd1t-z7jV5u1OE2jweBK8ogkFqr246_ApOo_69ZzeR_Og/viewform?usp=header",
  },
   {
    id: 7,
    club: "Spirits Bonus Class",
    title: "Cocktails with Casamigos",
    date: "Wed, July 1",
    time: "6:30 PM",
    spots: "17 spots left",
    location: "Addy’s Classroom",
    status: "RSVP Open",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLScT9YM-Y-nIDa57XuNcuu4JuzGaK_EHLrqgKgSF6K-rh01kEg/viewform?usp=header",
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

function Button({ children, onClick, href }) {
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

const AppButton = Button;

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
            flexShrink: 0,
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
        </div>
      </div>

      <div style={{ marginTop: 14 }}>
        <AppButton href={event.formLink}>{event.status}</AppButton>
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
  const [notes, setNotes] = useState([]);
  const [selectedMemberEmail, setSelectedMemberEmail] = useState("");
  const [offerDetail, setOfferDetail] = useState("");
  const [offerPrice, setOfferPrice] = useState("");
  const [offerBadge, setOfferBadge] = useState("Member Offer");
  const [memberSearch, setMemberSearch] = useState("");
  const [adminMessages, setAdminMessages] = useState([]);
  const [adminReply, setAdminReply] = useState("");
const [adminPosts, setAdminPosts] = useState([]);
  const [noteTitle, setNoteTitle] = useState("");
const [noteContent, setNoteContent] = useState("");
  const [noteAuthorGroup, setNoteAuthorGroup] = useState("tyler");
   const [editingNoteId, setEditingNoteId] = useState(null);
  const [offerImage, setOfferImage] = useState(null);
  const [postImage, setPostImage] = useState(null);
  const [notificationTitle, setNotificationTitle] = useState("");
const [notificationMessage, setNotificationMessage] = useState("");
const [notificationCategory, setNotificationCategory] = useState("Announcement");
 const [adminNotifications, setAdminNotifications] = useState([]);
  const [adminOffers, setAdminOffers] = useState([]);
const [noteAuthor, setNoteAuthor] = useState("Tyler’s Notes");
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [postMessage, setPostMessage] = useState("");
const [offerMessage, setOfferMessage] = useState("");
const [noteMessage, setNoteMessage] = useState("");

  const uploadPostImage = async () => {
  if (!postImage) {
    return "";
  }

  const fileName = `${Date.now()}-${postImage.name}`;

  const { error } = await supabase.storage
    .from("post-images")
    .upload(fileName, postImage);

  if (error) {
    setPostMessage("Post image upload failed.");
    return "";
  }

  const { data } = supabase.storage
    .from("post-images")
    .getPublicUrl(fileName);

  return data.publicUrl;
};
  const createPost = async () => {
  if (!content.trim()) {
   setPostMessage("Please write a post first.");
    return;
  }

  const imageUrl = await uploadPostImage();

  const { error } = await supabase
    .from("posts")
    .insert([
      {
        author,
        role,
        badge,
        icon,
        content,
        likes: 0,
        comments: 0,
        image_url: imageUrl,
      },
    ]);

  if (!error) {
    setContent("");
    setPostImage(null);
    setPostMessage("Post created. Go to Feed to view it.");
    loadAdminPosts();
  } else {
    console.log(error);
    setPostMessage("Error creating post.");
  }
};
 const deleteNotification = async (id) => {
  const { error } = await supabase
    .from("notifications")
    .delete()
    .eq("id", id);

  if (!error) {
    setNotificationMessage("Notification deleted.");
    loadNotifications();
  } else {
    setNotificationMessage("Error deleting notification.");
  }
};
const deletePost = async (id) => {
  const { error } = await supabase
    .from("posts")
    .delete()
    .eq("id", id);

  if (!error) {
   setPostMessage("Post deleted.");
  } else {
    setPostMessage("Error deleting post.");
  }
};
  const uploadOfferImage = async () => {
  if (!offerImage) {
    return "";
  }

  const fileName = `${Date.now()}-${offerImage.name}`;

  const { error } = await supabase.storage
    .from("offer-images")
    .upload(fileName, offerImage);

  if (error) {
    setOfferMessage("Image upload failed.");
    return "";
  }

  const { data } = supabase.storage
    .from("offer-images")
    .getPublicUrl(fileName);

  return data.publicUrl;
};
  const createOffer = async () => {
  if (!offerTitle.trim() || !offerDetail.trim()) {
    setOfferMessage("Please add an offer title and details.");
    return;
  }

  const imageUrl = await uploadOfferImage();

  const { error } = await supabase
    .from("offers")
    .insert([
      {
        title: offerTitle,
        detail: offerDetail,
        price: offerPrice,
        badge: offerBadge,
        image_url: imageUrl,
      },
    ]);

 if (!error) {
  setOfferTitle("");
  setOfferDetail("");
  setOfferPrice("");
  setOfferBadge("Member Offer");
  setOfferImage(null);

  await supabase.from("notifications").insert([
    {
      title: "New Member Offer",
      message: offerTitle,
      category: "Offers",
    },
  ]);

  setOfferMessage("Offer created. Go to Offers to view it.");

  loadAdminOffers();
}
 else {
    console.log(error);
    setOfferMessage("Error creating offer.");
  }
};
const deleteOffer = async (id) => {
  const { error } = await supabase
    .from("offers")
    .delete()
    .eq("created_at", id);

  if (!error) {
    loadAdminOffers();
  } else {
    console.log(error);
  }
};
  const createNotification = async () => {
  if (!notificationTitle.trim() || !notificationMessage.trim()) {
    setNotificationMessage("Please add a notification title and message.");
    return;
  }

  const { error } = await supabase
    .from("notifications")
    .insert([
      {
        title: notificationTitle,
        message: notificationMessage,
        category: notificationCategory,
      },
    ]);

  if (!error) {
    setNotificationTitle("");
    setNotificationMessage("");
    setNotificationCategory("Announcement");
    setNotificationMessage("Notification created.");
    loadNotifications();
  } else {
    console.log(error);
    setNotificationMessage("Error creating notification.");
  }
};
const createNote = async () => {
  if (!noteTitle.trim() || !noteContent.trim()) {
    setNoteMessage("Please add a note title and content.");
    return;
  }

  const noteData = {
    title: noteTitle,
    content: noteContent,
    author:
      noteAuthorGroup === "tyler"
        ? "Tyler's Notes"
        : noteAuthorGroup === "jim"
        ? "Jim's Notes"
        : noteAuthorGroup === "ryan"
        ? "Ryan's Notes"
        : "Mike & Derek Notes",
    author_group: noteAuthorGroup,
  };

let result;

if (editingNoteId) {
  result = await supabase
    .from("notes")
    .update(noteData)
    .eq("id", editingNoteId)
    .select();
} else {
  result = await supabase
    .from("notes")
    .insert([noteData])
    .select();
}

const { data, error } = result;

console.log("NOTE SAVE RESULT:", { editingNoteId, noteData, data, error });

  if (!error) {
    setNoteTitle("");
    setNoteContent("");
    setNoteAuthorGroup("tyler");
    setEditingNoteId(null);
    if (!editingNoteId) {
  await supabase.from("notifications").insert([
    {
      title: "New Tasting Note",
      message: noteTitle,
      category: "Notes",
    },
  ]);
}
     setNoteMessage(editingNoteId ? "Note updated." : "Note created.");
    loadNotes();
  } else {
    console.log(error);
    setNoteMessage(error.message || "Error saving note.");
  }
};
   const deleteNote = async (id) => {
  const { error } = await supabase
    .from("notes")
    .delete()
    .eq("id", id);

  if (!error) {
    setNoteMessage("Note deleted.");
    loadNotes();
  } else {
    console.log(error);
    setNoteMessage(error.message || "Error deleting note.");
  }
};
   const startEditNote = (note) => {
  setEditingNoteId(note.id);
  setNoteTitle(note.title || "");
  setNoteContent(note.content || "");
  setNoteAuthorGroup(note.author_group || "tyler");
  setNoteMessage("");
};

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
 const loadAdminNotifications = async () => {
  const { data, error } = await supabase
    .from("notifications")
    .select("*")
    .order("created_at", { ascending: false });

  if (!error && data) {
    setAdminNotifications(data);
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
 const loadAdminOffers = async () => {
  const { data, error } = await supabase
    .from("offers")
    .select("*")
    .order("created_at", { ascending: false });

  if (!error && data) {
    console.log("Admin offers loaded:", data);
    setAdminOffers(data);
  } else {
    console.log("Error loading admin offers:", error.message, error);
  }
};


  const loadAdminMessages = async () => {
const { data, error } = await supabase
  .from("messages")
  .select("*")
  .or("archived.is.null,archived.eq.false")
  .order("created_at", { ascending: false });

  if (!error && data) {
    setAdminMessages(data);
  }
};
   useEffect(() => {
  loadMembers();
  loadAdminPosts();
  loadAdminMessages();
  loadNotes();
  loadAdminOffers();

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
    .subscribe((status) => {
  if (status === "SUBSCRIBED") {
    loadAdminMessages();
  }
});

  return () => {
    supabase.removeChannel(channel);
  };
}, []);
  const loadNotes = async () => {
  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .order("created_at", { ascending: false });

  if (!error && data) {
    setNotes(data);
  }
};
const sendAdminReply = async () => {
  if (!adminReply.trim() || !selectedConversation) return;

  const { error } = await supabase
    .from("messages")
    .insert([
      {
        sender_email: selectedConversation.staff_email,
        sender_name: "Addy's Staff",
        recipient_email: selectedConversation.member_email,
        member_email: selectedConversation.member_email,
        staff_email: selectedConversation.staff_email,
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
const archiveConversation = async () => {
  if (!selectedConversation) return;

  const confirmed = window.confirm(
    "Archive this conversation from the inbox?"
  );
  if (!confirmed) return;

const { data, error } = await supabase
  .from("messages")
  .update({ archived: true })
  .or(
    `and(sender_email.eq.${selectedConversation.sender_email},recipient_email.eq.${selectedConversation.recipient_email}),and(sender_email.eq.${selectedConversation.recipient_email},recipient_email.eq.${selectedConversation.sender_email})`
  )
  .select();

  if (error) {
    alert("Archive failed: " + error.message);
    return;
  }

  if (!data || data.length === 0) {
    alert("No matching messages were found to archive.");
    return;
  }

  setSelectedConversation(null);
  setSelectedMemberEmail(null);
  await loadAdminMessages();
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
    <div style={{ padding: 20, paddingBottom: 160 }}>
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

{postMessage ? (
  <div
    style={{
      marginTop: 12,
      background: "#fffaf0",
      borderRadius: 14,
      padding: 12,
      color: "#555",
    }}
  >
    {postMessage}
  </div>
) : null}
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
<input
  type="file"
  accept="image/*"
  onChange={(event) => setPostImage(event.target.files[0])}
  style={{ marginBottom: 12 }}
/>
        <AppButton onClick={createPost}>
          Create Feed Post
        </AppButton>
      </Card>
<Card style={{ marginTop: 16 }}>
  <h2 style={{ margin: "0 0 12px", fontSize: 22 }}>
    Create Notification
  </h2>

  <input
    value={notificationTitle}
    onChange={(event) => setNotificationTitle(event.target.value)}
    placeholder="Notification Title"
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
    value={notificationMessage}
    onChange={(event) => setNotificationMessage(event.target.value)}
    placeholder="Notification Message"
    style={{
      width: "100%",
      minHeight: 90,
      borderRadius: 16,
      border: "1px solid #ddd6cf",
      padding: 13,
      boxSizing: "border-box",
      fontFamily: "Arial, sans-serif",
      fontSize: 15,
      marginBottom: 12,
    }}
  />

  <select
    value={notificationCategory}
    onChange={(event) => setNotificationCategory(event.target.value)}
    style={{
      width: "100%",
      borderRadius: 16,
      border: "1px solid #ddd6cf",
      padding: 13,
      boxSizing: "border-box",
      fontSize: 15,
      marginBottom: 12,
    }}
  >
    <option>Announcement</option>
    <option>Offer</option>
    <option>Class</option>
    <option>RSVP</option>
  </select>

  <AppButton onClick={createNotification}>
    Create Notification
  </AppButton>
</Card>
     <Card style={{ marginTop: 16 }}>
  <h2 style={{ margin: "0 0 12px", fontSize: 22 }}>
    Manage Notifications
  </h2>

  <div style={{ display: "grid", gap: 10 }}>
   {adminNotifications.map((notification) => (
      <div
        key={notification.id}
        style={{
          padding: 12,
          border: "1px solid #ddd",
          borderRadius: 14,
          background: "#faf7f3",
        }}
      >
        <div style={{ fontWeight: 800 }}>
          {notification.title}
        </div>

        <div style={{ marginTop: 6, color: "#666", fontSize: 14 }}>
          {notification.message}
        </div>

        <div style={{ marginTop: 6, fontSize: 12, color: burgundy, fontWeight: 800 }}>
          {notification.category}
        </div>

        <button
          onClick={() => deleteNotification(notification.id)}
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
          Delete Notification
        </button>
      </div>
    ))}
  </div>
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
<input
  type="file"
  accept="image/*"
  onChange={(event) => setOfferImage(event.target.files[0])}
  style={{ marginBottom: 12 }}
/>
        <AppButton onClick={createOffer}>
          Create Offer
        </AppButton>

        {offerMessage ? (
  <div
    style={{
      marginTop: 12,
      background: "#fffaf0",
      borderRadius: 14,
      padding: 12,
      color: "#555",
    }}
  >
    {offerMessage}
  </div>
) : null}
      </Card>
      <Card style={{ marginTop: 16 }}>
  <h2 style={{ margin: "0 0 12px", fontSize: 22 }}>
    Create Club Note
  </h2>

  <input
    value={noteTitle}
    onChange={(event) => setNoteTitle(event.target.value)}
    placeholder="Note Title"
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
    value={noteContent}
    onChange={(event) => setNoteContent(event.target.value)}
    placeholder="Write the note..."
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

 
<select
  value={noteAuthorGroup}
  onChange={(e) => setNoteAuthorGroup(e.target.value)}
  style={{
    width: "100%",
    padding: 12,
    borderRadius: 12,
    border: "1px solid #ddd",
    marginBottom: 12,
  }}
>
  <option value="tyler">Tyler's Notes</option>
  <option value="jim">Jim's Notes</option>
  <option value="ryan">Ryan's Notes</option>
  <option value="mike_derek">Mike & Derek Notes</option>
</select>
 <AppButton onClick={createNote}>
  {editingNoteId ? "Update Note" : "Create Note"}
</AppButton>
        {noteMessage ? (
  <div
    style={{
      marginTop: 12,
      background: "#fffaf0",
      borderRadius: 14,
      padding: 12,
      color: "#555",
    }}
  >
    {noteMessage}
  </div>
) : null}
</Card>
      <Card>
  <h2 style={{ margin: "0 0 12px", fontSize: 22 }}>
    Manage Club Notes
  </h2>

  {notes.length === 0 ? (
    <p style={{ margin: 0, color: "#666" }}>
      No club notes yet.
    </p>
  ) : (
    <div
  style={{
    display: "grid",
    gap: 10,
    maxHeight: "60vh",
    overflowY: "auto",
    paddingRight: 6,
  }}
>
      {notes.map((note) => (
        <div
          key={note.id}
          style={{
            padding: 12,
            border: "1px solid #ddd",
            borderRadius: 14,
            background: "#faf7f3",
          }}
        >
          <div style={{ fontWeight: 900, color: burgundy }}>
            {note.title}
          </div>

          <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>
            {note.author}
          </div>

         <p style={{ margin: "8px 0 0", color: "#444", lineHeight: 1.4 }}>
  {note.content}
</p>

<div style={{ display: "flex", gap: 8, marginTop: 12 }}>

  <button
    onClick={() => startEditNote(note)}
    style={{
      border: 0,
      borderRadius: 12,
      padding: "10px 12px",
      background: burgundy,
      color: "white",
      fontWeight: 700,
      cursor: "pointer",
    }}
  >
    Edit Note
  </button>

  <button
    onClick={() => deleteNote(note.id)}
    style={{
      border: 0,
      borderRadius: 12,
      padding: "10px 12px",
      background: "#8a1f1f",
      color: "white",
      fontWeight: 700,
      cursor: "pointer",
    }}
  >
    Delete Note
  </button>

</div>
        </div>
      ))}
    </div>
  )}
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

<div
  style={{
    display: "grid",
    gap: 10,
    maxHeight: "60vh",
    overflowY: "auto",
    paddingRight: 6,
  }}
>
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
 <div style={{ display: "grid", gap: 10, maxHeight: "60vh", overflowY: "auto", paddingRight: 6 }}>
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
    Manage Offers
  </h2>
<p style={{ margin: "0 0 12px", color: "#666" }}>
  {adminOffers.length} offers loaded
</p>
  <div style={{ display: "grid", gap: 10 }}>
    {adminOffers.map((offer) => (
      <div
        key={offer.created_at}
        style={{
          padding: 12,
          border: "1px solid #ddd",
          borderRadius: 14,
          background: "#faf7f3",
        }}
      >
        <div style={{ fontWeight: 700 }}>
          {offer.title}
        </div>

        <div style={{ marginTop: 6, color: "#666", fontSize: 14 }}>
          {offer.detail}
        </div>

        <div style={{ marginTop: 6, fontWeight: 700 }}>
          {offer.price}
        </div>

        <button
         onClick={() => deleteOffer(offer.created_at)}
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
          Delete Offer
        </button>
      </div>
    ))}
  </div>
</Card>
      <Card style={{ marginTop: 16 }}>
  <h2 style={{ margin: "0 0 12px", fontSize: 22 }}>
    Admin DM Inbox
  </h2>

 <div style={{ display: "grid", gap: 10, maxHeight: "45vh", overflowY: "auto", paddingRight: 6 }}>
    {[
  ...new Map(
adminMessages
  .filter((msg) => msg.sender_email !== "addysevents333@gmail.com")
  .map((msg) => [
  msg.sender_email,
  msg,
])
  ).values(),
].map((msg) => (
      <div
  key={msg.id}
onClick={async () => {
  setSelectedConversation(msg);
  setSelectedMemberEmail(msg.sender_email);
   console.log("CLICKED CONVERSATION", {
  member_email: msg.member_email,
  staff_email: msg.staff_email,
  sender_email: msg.sender_email,
});
await supabase
  .from("messages")
  .update({ is_read: true })
  .eq("member_email", msg.member_email)
  .eq("staff_email", msg.staff_email)
  .eq("sender_email", msg.member_email);

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

  {adminMessages.some(
  (message) =>
    message.member_email === msg.member_email &&
    message.staff_email === msg.staff_email &&
    message.sender_email === msg.member_email &&
    !message.is_read
) && (
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
<div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: 10,
    maxHeight: "45vh",
    overflowY: "auto",
    paddingRight: 6,
    marginBottom: 12,
  }}
>
 {adminMessages
  .filter(
    (msg) =>
      msg.sender_email === selectedConversation.sender_email ||
      msg.recipient_email === selectedConversation.sender_email
  )
  .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
  .map((msg) => {
      const fromStaff = msg.sender_email === "addysevents333@gmail.com";

      return (
        <div
          key={msg.id}
          style={{
            alignSelf: fromStaff ? "flex-end" : "flex-start",
            background: fromStaff ? burgundy : "#ece7df",
            color: fromStaff ? "white" : "#111",
            borderRadius: 18,
            padding: 12,
            maxWidth: "80%",
            fontSize: 14,
          }}
        >
          {msg.message}
        </div>
      );
    })}
</div>
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
     Send Message
    </button>
     <button
  onClick={archiveConversation}
  style={{
    width: "100%",
    border: 0,
    borderRadius: 14,
    padding: "12px 14px",
    background: "#8a1f1f",
    color: "white",
    fontWeight: 900,
    cursor: "pointer",
    marginTop: 10,
  }}
>
  Delete Conversation
</button>
  </Card>
) : null}
    </div>
  );
}
function FeedPost({ post, setFullscreenImage, currentMember }) {
   const [postLikes, setPostLikes] = useState([]);
const [postComments, setPostComments] = useState([]);
const [commentText, setCommentText] = useState("");
const [showComments, setShowComments] = useState(false);
useEffect(() => {
  loadPostEngagement();
}, []);

const loadPostEngagement = async () => {
  const { data: likesData } = await supabase
    .from("post_likes")
    .select("*")
    .eq("post_id", post.id);

  const { data: commentsData } = await supabase
    .from("post_comments")
    .select("*")
    .eq("post_id", post.id)
    .order("created_at", { ascending: true });

  setPostLikes(likesData || []);
  setPostComments(commentsData || []);
};
   const userLikedPost = postLikes.some(
  (like) => like.member_email === currentMember?.email
);

const togglePostLike = async () => {
   console.log("LIKE CLICKED", currentMember, post.id);
  if (!currentMember?.email) return;

  const { data: existingLikes } = await supabase
    .from("post_likes")
    .select("*")
    .eq("post_id", post.id)
    .eq("member_email", currentMember.email);

  const existingLike = existingLikes?.[0];

  if (existingLike) {
    await supabase
      .from("post_likes")
      .delete()
      .eq("id", existingLike.id);
  } else {
    await supabase
      .from("post_likes")
      .insert([
        {
          post_id: post.id,
          member_email: currentMember.email,
          member_name: currentMember.name || currentMember.email,
        },
      ]);
  }

  loadPostEngagement();
};
   const submitPostComment = async () => {
  if (!currentMember?.email) return;
  if (!commentText.trim()) return;

  await supabase
    .from("post_comments")
    .insert([
      {
        post_id: post.id,
        member_email: currentMember.email,
        member_name: currentMember.name || currentMember.email,
        comment: commentText.trim(),
      },
    ]);

  setCommentText("");
  loadPostEngagement();
};
   const deleteComment = async (commentId) => {
  await supabase
    .from("post_comments")
    .delete()
    .eq("id", commentId);

  loadPostEngagement();
};
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
 {post.image_url ? (
  <img
    src={post.image_url}
    alt=""
    onClick={() => setFullscreenImage(post.image_url)}
    style={{
      width: "100%",
      borderRadius: 16,
      margin: "12px 0",
      objectFit: "contain",
      maxHeight: 400,
      background: "#f5f5f5",
      cursor: "pointer",
      display: "block",
    }}
  />
) : null}
          <div style={{ color: "#999", fontSize: 12, marginTop: 4 }}>{post.time}</div>

          <p style={{ margin: "12px 0", lineHeight: 1.55, color: "#444", fontSize: 14 }}>
            {post.content}
          </p>

<div style={{ display: "flex", gap: 10 }}>
  <button
    onClick={togglePostLike}
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
    {userLikedPost ? "❤️" : "🤍"} {postLikes.length}
  </button>

  <button
  onClick={() => setShowComments(!showComments)}
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
  💬 {postComments.length}
</button>
</div>

{showComments ? (
  <div
    style={{
      marginTop: 12,
      paddingTop: 12,
      borderTop: "1px solid #eee",
    }}
  >
    {postComments.length === 0 ? (
  <div style={{ color: "#777", fontSize: 13, marginBottom: 10 }}>
    No comments yet. Be the first to comment.
  </div>
) : (
  <div style={{ display: "grid", gap: 8, marginBottom: 12 }}>
    {postComments.map((comment) => (
      <div
        key={comment.id}
        style={{
          background: "#faf7f3",
          borderRadius: 12,
          padding: 10,
          fontSize: 13,
        }}
      >
        <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }}
>
  <div style={{ fontWeight: 900, color: burgundy }}>
    {comment.member_name || "Member"}
  </div>

  <button
    onClick={() => deleteComment(comment.id)}
    style={{
      border: 0,
      background: "transparent",
      color: "#999",
      cursor: "pointer",
      fontSize: 12,
    }}
  >
    ✕
  </button>
</div>

        <div style={{ color: "#444", marginTop: 4 }}>
          {comment.comment}
        </div>
      </div>
    ))}
  </div>
)}<textarea
  value={commentText}
  onChange={(e) => setCommentText(e.target.value)}
  placeholder="Write a comment..."
  style={{
    width: "100%",
    minHeight: 70,
    borderRadius: 12,
    border: "1px solid #ddd",
    padding: 10,
    boxSizing: "border-box",
    fontFamily: "Arial, sans-serif",
    fontSize: 14,
    marginBottom: 8,
  }}
/>

<button
  onClick={submitPostComment}
  style={{
    border: 0,
    background: burgundy,
    color: "white",
    borderRadius: 12,
    padding: "9px 12px",
    fontWeight: 800,
    cursor: "pointer",
  }}
>
  Post Comment
</button>
  </div>
) : null}

        </div>
      </div>
    </Card>
  );
}
function NotificationPanel({ notifications }) {
  return (
    <Card
  style={{
    color: "#222",
        position: "absolute",
        top: 42,
        right: 0,
        width: 300,
        maxHeight: 420,
        overflowY: "auto",
        zIndex: 999,
      }}
    >
      <h3 style={{ margin: "0 0 12px" }}>Notifications</h3>

      {notifications.length === 0 ? (
        <p style={{ margin: 0, color: "#666" }}>No notifications yet.</p>
      ) : (
        notifications.map((notification) => (
          <div
            key={notification.id}
            style={{
              padding: "10px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <strong>{notification.title}</strong>
            <p style={{ margin: "4px 0", color: "#666", fontSize: 14 }}>
              {notification.message}
            </p>
            <div style={{ fontSize: 12, color: burgundy, fontWeight: 800 }}>
              {notification.category}
            </div>
          </div>
        ))
      )}
    </Card>
  );
}
function HomeScreen({
  setActiveTab,
  currentMember,
  showNotifications,
  setShowNotifications,
  notifications,
  setFullscreenImage,
  notificationsRead,
  setNotificationsRead,
   unreadNotifications,
setUnreadNotifications,
}) {
  const [clubhouseFeed, setClubhouseFeed] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
   const response = await fetch(`${SUPABASE_URL}/rest/v1/posts?select=*&order=created_at.desc`, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    });

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

          <div style={{ position: "relative" }}>
            <div
        onClick={async () => {
  const now = new Date().toISOString();

  setShowNotifications(!showNotifications);
  setNotificationsRead(true);
  setUnreadNotifications(0);
  localStorage.setItem("notificationsRead", "true");

  if (currentMember?.email) {
    await supabase
      .from("members")
      .update({ last_notifications_viewed: now })
      .eq("email", currentMember.email);

    const updatedMember = {
      ...currentMember,
      last_notifications_viewed: now,
    };

    setCurrentMember(updatedMember);
    localStorage.setItem("addysMember", JSON.stringify(updatedMember));
  }
}}
              style={{
                fontSize: 26,
                cursor: "pointer",
              }}
            >
              🔔
            </div>
{unreadNotifications > 0 ? (
  <div
    style={{
      position: "absolute",
      top: -6,
      right: -8,
      background: "#d50000",
      color: "white",
      borderRadius: 999,
      minWidth: 18,
      height: 18,
      fontSize: 11,
      fontWeight: 900,
      display: "grid",
      placeItems: "center",
      padding: "0 5px",
    }}
  >
   {unreadNotifications}
  </div>
) : null}
            {showNotifications ? (
              <NotificationPanel notifications={notifications} />
            ) : null}
          </div>
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
          🧪 Addy’s Clubhouse Beta — features and layouts may change as we improve the member experience.
        </div>

        <div
          style={{
            marginTop: 22,
            background: "rgba(255,255,255,.12)",
            borderRadius: 24,
            padding: 16,
          }}
        >
          <div style={{ opacity: 0.75, fontSize: 12, fontWeight: 800, textTransform: "uppercase" }}>
            Addy’s Member Exclusive
          </div>

          <h2 style={{ margin: "8px 0", fontSize: 22, lineHeight: 1.15 }}>
            2009 Vintage Champagne Allocation
          </h2>

          <p style={{ margin: 0, opacity: 0.85, fontSize: 14 }}>
            Extremely limited bottles available for Wine Club members first.
          </p>
        </div>
      </div>

      <div style={{ padding: 20 }}>
        <SectionHeader title="Clubhouse Feed" />

        <div style={{ display: "grid", gap: 12 }}>
          {clubhouseFeed.map((post) => (
          <FeedPost
  key={post.id}
  post={post}
  setFullscreenImage={setFullscreenImage}
  currentMember={currentMember}
/>
          ))}
        </div>
      </div>

      <div style={{ padding: 20 }}>
        <SectionHeader
          title="Upcoming Classes"
          action="See all"
          onAction={() => setActiveTab("calendar")}
        />

        <div style={{ display: "grid", gap: 12 }}>
          {events.slice(0, 2).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      <div style={{ padding: "0 20px" }}>
        <SectionHeader title="Clubhouse Tools" />
         <div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
  }}
>

 <div onClick={() => setActiveTab("profile")} style={{ cursor: "pointer" }}>
  <ToolCard icon="🎟️" title="Digital Card" subtitle="Show at checkout" />
</div>

<div onClick={() => setActiveTab("community")} style={{ cursor: "pointer" }}>
  <ToolCard
    icon="📸"
    title="Community Board"
    subtitle="Share bottles, dinners & tours *UNDER DEVELOPMENT*"
  />
</div>

  <div onClick={() => setActiveTab("notes")} style={{ cursor: "pointer" }}>
    <ToolCard icon="📚" title="Club Notes" subtitle="Jim, Tyler & Spirits Team" />
  </div>

  <div onClick={() => setActiveTab("offers")} style={{ cursor: "pointer" }}>
    <ToolCard icon="🎁" title="Offers" subtitle="Club exclusives" />
  </div>

  <div onClick={() => setActiveTab("messages")} style={{ cursor: "pointer" }}>
    <ToolCard icon="💬" title="Staff DMs" subtitle="Message Tyler, Ryan & team" />
  </div>

  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSfIDTyHiSCDS5_Lupz7Ksb9qR5qphayTSKR1lIWU4kw5FUXkQ/viewform?usp=header"
    target="_blank"
    rel="noreferrer"
    style={{ textDecoration: "none" }}
  >
    <ToolCard icon="🧪" title="Beta Feedback" subtitle="Tell us what to improve" />
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
        Click the live calendar or view and RSVP upcoming events for both clubs.
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

function OffersScreen({ setFullscreenImage, currentMember }) {
  const [liveOffers, setLiveOffers] = useState([]);
  const [offerLikes, setOfferLikes] = useState([]);

  useEffect(() => {
    loadOffers();
    loadOfferLikes();
  }, [currentMember?.email]);

  const loadOffers = async () => {
    const { data, error } = await supabase
      .from("offers")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setLiveOffers(data);
    }
  };

  const loadOfferLikes = async () => {
    const { data, error } = await supabase
      .from("offer_likes")
      .select("offer_created_at, member_email");

    if (!error && data) {
      setOfferLikes(data);
    }
  };

  const toggleOfferLike = async (offer) => {
    const memberEmail = currentMember?.email;

    if (!memberEmail) {
      alert("Please log in to like an offer.");
      return;
    }

    const alreadyLiked = offerLikes.some(
      (like) =>
        like.offer_created_at === offer.created_at &&
        like.member_email === memberEmail
    );

    let error;

    if (alreadyLiked) {
      ({ error } = await supabase
        .from("offer_likes")
        .delete()
        .eq("offer_created_at", offer.created_at)
        .eq("member_email", memberEmail));
    } else {
      ({ error } = await supabase.from("offer_likes").insert([
        {
          offer_created_at: offer.created_at,
          member_email: memberEmail,
        },
      ]));
    }

    if (error) {
      alert("Unable to update like: " + error.message);
      return;
    }

    await loadOfferLikes();
  };

  return (
    <div style={{ padding: 20, paddingBottom: 92 }}>
      <h1 style={{ margin: "0 0 6px", fontSize: 28 }}>
        Member Offers
      </h1>

      <p style={{ margin: "0 0 18px", color: "#666" }}>
        Rare bottles, early access, and club-only opportunities.
      </p>

      <div style={{ display: "grid", gap: 12 }}>
        {liveOffers.map((offer) => {
          const likeCount = offerLikes.filter(
            (like) => like.offer_created_at === offer.created_at
          ).length;

          const memberLiked = offerLikes.some(
            (like) =>
              like.offer_created_at === offer.created_at &&
              like.member_email === currentMember?.email
          );

          return (
            <Card key={offer.created_at}>
              {offer.image_url ? (
                <img
                  src={offer.image_url}
                  alt={offer.title}
                  onClick={() => setFullscreenImage(offer.image_url)}
                  style={{
                    width: "100%",
                    borderRadius: 16,
                    marginBottom: 12,
                    objectFit: "contain",
                    maxHeight: 300,
                    cursor: "pointer",
                  }}
                />
              ) : null}

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

              <div style={{ marginTop: 14 }}>
                <button
                  type="button"
                  onClick={() => toggleOfferLike(offer)}
                  style={{
                    border: 0,
                    borderRadius: 12,
                    padding: "9px 13px",
                    background: memberLiked ? burgundy : "#eee8e2",
                    color: memberLiked ? "white" : burgundy,
                    fontWeight: 800,
                    cursor: "pointer",
                  }}
                >
                  {memberLiked ? "❤️" : "🤍"}{" "}
{likeCount}
                </button>
              </div>
            </Card>
          );
        })}
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
}, [currentMember?.email]);
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
      member_email: currentMember?.email,
      staff_email: selectedStaff.email,
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
{currentMember?.role === "admin" ? (
  <Card style={{ marginBottom: 14, background: "#fffaf0", border: `1px solid ${gold}` }}>
    <h3 style={{ margin: "0 0 6px" }}>Staff Inbox</h3>
    <p style={{ margin: 0, color: "#666", fontSize: 14, lineHeight: 1.45 }}>
      Member conversations are handled in the Admin tab under Admin DM Inbox.
    </p>
  </Card>
) : null}
      <Card style={{ marginBottom: 14, background: "#fffaf0", border: `1px solid ${gold}` }}>
        <h3 style={{ margin: "0 0 6px" }}>Controlled Messaging</h3>
        <p style={{ margin: 0, color: "#666", fontSize: 14, lineHeight: 1.45 }}>
          Members can DM staff, but not other members. They can also attach photos for bottle recommendations, food pairings, damaged items, or shelf pictures.
        </p>
      </Card>

      <div
  style={{
    display: "grid",
    gap: 10,
    marginBottom: 14,
    maxHeight: "35vh",
    overflowY: "auto",
    paddingRight: 6,
  }}
>
       {staffContacts
  .filter((staff) => staff.email !== currentMember?.email)
  .map((staff) => {
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
            <h3 style={{ margin: 0 }}>
  Message {selectedStaff.name}
</h3>
            <p style={{ margin: "3px 0 0", color: "#777", fontSize: 13 }}>{selectedStaff.role}</p>
          </div>
        </div>

<div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginBottom: 12,
    maxHeight: "45vh",
    overflowY: "auto",
    paddingRight: 6,
  }}
>
 {messages
  .filter(
    (msg) =>
      (msg.sender_email === currentMember?.email &&
        msg.recipient_email === selectedStaff.email) ||
      (msg.sender_email === selectedStaff.email &&
        msg.recipient_email === currentMember?.email)
  )
  .map((msg) => (
    <div
      key={msg.id}
      style={{
        alignSelf:
          msg.sender_email === currentMember?.email
            ? "flex-end"
            : "flex-start",
        background:
         msg.sender_email === currentMember?.email
            ? burgundy
            : "#ece7df",
        color:
          msg.sender_email === currentMember?.email
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

function NotesScreen({ currentMember, setFullscreenImage }) {
  const [notesView, setNotesView] = useState("expert");
  const [liveNotes, setLiveNotes] = useState([]);
   const [noteLikes, setNoteLikes] = useState([]);
const [editingJournalId, setEditingJournalId] = useState(null);
  const [journalEntries, setJournalEntries] = useState([]);
  const [showJournalForm, setShowJournalForm] = useState(false);
  const [journalProductName, setJournalProductName] = useState("");
  const [journalProducer, setJournalProducer] = useState("");
  const [journalVintage, setJournalVintage] = useState("");
  const [journalRegion, setJournalRegion] = useState("");
  const [journalCategory, setJournalCategory] = useState("Wine");
  const [journalStars, setJournalStars] = useState(0);
  const [journalScore, setJournalScore] = useState("");
  const [journalNotes, setJournalNotes] = useState("");
  const [journalFavorite, setJournalFavorite] = useState(false);
  const [journalBuyAgain, setJournalBuyAgain] = useState(false);
  const [journalTastedOn, setJournalTastedOn] = useState("");
  const [journalMessage, setJournalMessage] = useState("");
  const [journalPhoto, setJournalPhoto] = useState(null);
const [journalPhotoUrl, setJournalPhotoUrl] = useState("");

  useEffect(() => {
    loadNotes();
    loadJournalEntries();
     loadNoteLikes();
  }, []);

  const loadNotes = async () => {
    const { data, error } = await supabase
      .from("notes")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setLiveNotes(data);
    }
  };

  const loadJournalEntries = async () => {
    const { data, error } = await supabase
      .from("member_product_notes")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setJournalEntries(data);
    }
  };
  const loadNoteLikes = async () => {
  const { data, error } = await supabase
    .from("note_likes")
    .select("*");

  if (!error && data) {
    setNoteLikes(data);
  }
};
const saveJournalEntry = async () => {
  if (!journalProductName.trim()) {
    setJournalMessage("Please add a bottle or product name.");
    return;
  }
let uploadedPhotoUrl = journalPhotoUrl;

if (journalPhoto) {
  const fileName = `${Date.now()}-${journalPhoto.name}`;

  const { error: uploadError } = await supabase.storage
    .from("journal-photos")
    .upload(fileName, journalPhoto);

  if (!uploadError) {
    const { data } = supabase.storage
      .from("journal-photos")
      .getPublicUrl(fileName);

    uploadedPhotoUrl = data.publicUrl;
  }
}
  const journalData = {
    member_email: currentMember?.email || "",
    member_name: currentMember?.name || "",
    product_name: journalProductName,
    producer: journalProducer,
    vintage: journalVintage,
    region: journalRegion,
    category: journalCategory,
    photo_url: uploadedPhotoUrl,
    rating_stars: journalStars ? Number(journalStars) : null,
    rating_score: journalScore ? Number(journalScore) : null,
    notes: journalNotes,
    favorite: journalFavorite,
    buy_again: journalBuyAgain,
    tasted_on: journalTastedOn || null,
    is_custom: true,
  };

  const { error } = editingJournalId
    ? await supabase
        .from("member_product_notes")
        .update(journalData)
        .eq("id", editingJournalId)
    : await supabase
        .from("member_product_notes")
        .insert([journalData]);

  if (!error) {
    setJournalProductName("");
    setJournalProducer("");
    setJournalVintage("");
    setJournalRegion("");
    setJournalCategory("Wine");
    setJournalStars(0);
    setJournalScore("");
    setJournalNotes("");
    setJournalFavorite(false);
    setJournalBuyAgain(false);
    setJournalTastedOn("");
    setJournalMessage(editingJournalId ? "Bottle updated." : "Bottle saved to your journal.");
    setEditingJournalId(null);
    setShowJournalForm(false);
    loadJournalEntries();
  } else {
    console.log(error);
    setJournalMessage(error.message || "Error saving bottle.");
  }
};
  const deleteJournalEntry = async (id) => {
  const { error } = await supabase
    .from("member_product_notes")
    .delete()
    .eq("id", id);

  if (!error) {
    setJournalMessage("Journal entry deleted.");
    loadJournalEntries();
  } else {
    console.log(error);
    setJournalMessage(error.message || "Error deleting journal entry.");
  }
};
  const startEditJournalEntry = (entry) => {
  setEditingJournalId(entry.id);
  setShowJournalForm(true);

  setJournalProductName(entry.product_name || "");
  setJournalProducer(entry.producer || "");
  setJournalVintage(entry.vintage || "");
  setJournalRegion(entry.region || "");
  setJournalCategory(entry.category || "Wine");
  setJournalStars(entry.rating_stars || 0);
  setJournalScore(entry.rating_score || "");
  setJournalNotes(entry.notes || "");
  setJournalFavorite(entry.favorite || false);
  setJournalBuyAgain(entry.buy_again || false);
  setJournalTastedOn(entry.tasted_on || "");
  setJournalMessage("");
};
   const toggleNoteLike = async (noteId) => {
  if (!currentMember?.email) return;

  const existingLike = noteLikes.find(
    (like) =>
      like.note_id === noteId &&
      like.member_email === currentMember.email
  );

  if (existingLike) {
    await supabase
      .from("note_likes")
      .delete()
      .eq("id", existingLike.id);
  } else {
    await supabase
      .from("note_likes")
      .insert([
        {
          note_id: noteId,
          member_email: currentMember.email,
          member_name: currentMember.name || currentMember.email,
        },
      ]);
  }

  loadNoteLikes();
};
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
            <h2 style={{ margin: "8px 0 6px", fontSize: 22 }}>Expert Notes</h2>
            <p style={{ margin: 0, opacity: 0.85, lineHeight: 1.5 }}>
              Wine & Spirits Club previews, recaps, producer stories, food pairings, vintage notes, and quick takeaways from class.
            </p>
          </Card>

          <div style={{ display: "grid", gap: 12 }}>
            {liveNotes.map((note) => (
              <Card key={note.author}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 46, height: 46, borderRadius: 18, background: blush, display: "grid", placeItems: "center", fontSize: 24 }}>
                    {note.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: burgundy, fontSize: 12, fontWeight: 900, textTransform: "uppercase" }}>{note.author}</div>
                    <div style={{ color: "#777", fontSize: 13, marginTop: 2 }}>Club Note</div>
                    <h3 style={{ margin: "8px 0 4px", fontSize: 17 }}>{note.title}</h3>
                   <p style={{ margin: 0, color: "#666", fontSize: 14, lineHeight: 1.45 }}>
  {note.content}
</p>

<div style={{ marginTop: 12 }}>
  <button
    onClick={() => toggleNoteLike(note.id)}
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
    {noteLikes.some(
      (like) =>
        like.note_id === note.id &&
        like.member_email === currentMember?.email
    )
      ? "❤️"
      : "🤍"}{" "}
    {noteLikes.filter((like) => like.note_id === note.id).length}
  </button>
</div>
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
          <AppButton onClick={() => setShowJournalForm(!showJournalForm)}>
  {showJournalForm ? "Cancel" : "+ Add Bottle"}
</AppButton>
          {showJournalForm ? (
  <Card style={{ marginTop: 14 }}>
    <h2 style={{ margin: "0 0 12px", fontSize: 20 }}>Add Bottle</h2>
   <input
  value={journalProductName}
  onChange={(e) => setJournalProductName(e.target.value)}
  placeholder="Bottle / Product Name"
  style={{
    width: "100%",
    padding: 12,
    borderRadius: 12,
    border: "1px solid #ddd",
    marginBottom: 10,
     boxSizing: "border-box",
  }}
/>

<input
  value={journalProducer}
  onChange={(e) => setJournalProducer(e.target.value)}
  placeholder="Producer / Distillery"
  style={{
    width: "100%",
    padding: 12,
    borderRadius: 12,
    border: "1px solid #ddd",
    marginBottom: 10,
     boxSizing: "border-box",
  }}
/>

<input
  value={journalVintage}
  onChange={(e) => setJournalVintage(e.target.value)}
  placeholder="Vintage / Batch"
  style={{
    width: "100%",
    padding: 12,
    borderRadius: 12,
    border: "1px solid #ddd",
    marginBottom: 10,
     boxSizing: "border-box",
  }}
/>

<input
  value={journalRegion}
  onChange={(e) => setJournalRegion(e.target.value)}
  placeholder="Region"
  style={{
    width: "100%",
    padding: 12,
    borderRadius: 12,
    border: "1px solid #ddd",
    marginBottom: 10,
     boxSizing: "border-box",
  }}
/>

<select
  value={journalCategory}
  onChange={(e) => setJournalCategory(e.target.value)}
  style={{
    width: "100%",
    padding: 12,
    borderRadius: 12,
    border: "1px solid #ddd",
    marginBottom: 10,
     boxSizing: "border-box",
  }}
>
  <option>Red Wine</option>
   <option>White Wine</option>
   <option>Sparkling Wine</option>
   <option>Rose</option>
   <option>Other Wine</option>
  <option>Bourbon</option>
  <option>Whiskey</option>
  <option>Scotch</option>
  <option>Tequila</option>
  <option>Mezcal</option>
  <option>RTD / Canned Cocktail</option>
   <option>Sake</option>
    <option>Soju</option>
  <option>Other</option>
</select>
   <div style={{ marginBottom: 12 }}>
  <div
    style={{
      fontSize: 13,
      fontWeight: 800,
      color: "#555",
      marginBottom: 6,
       boxSizing: "border-box",
    }}
  >
    Star Rating
  </div>

  <div style={{ display: "flex", gap: 6 }}>
    {[1, 2, 3, 4, 5].map((star) => (
      <button
        key={star}
        type="button"
        onClick={() => setJournalStars(star)}
        style={{
          border: 0,
          background: "transparent",
          fontSize: 32,
          cursor: "pointer",
          padding: 0,
          lineHeight: 1,
           boxSizing: "border-box",
        }}
      >
        {journalStars >= star ? "★" : "☆"}
      </button>
    ))}
  </div>
</div>
    <input
  type="number"
  min="50"
  max="100"
  value={journalScore}
  onChange={(e) => setJournalScore(e.target.value)}
  placeholder="100 Point Score (Optional)"
  style={{
    width: "100%",
    padding: 12,
    borderRadius: 12,
    border: "1px solid #ddd",
    marginBottom: 10,
     boxSizing: "border-box",
  }}
/>
    <textarea
  value={journalNotes}
  onChange={(e) => setJournalNotes(e.target.value)}
  placeholder="Tasting Notes"
  rows={5}
  style={{
    width: "100%",
    padding: 12,
    borderRadius: 12,
    border: "1px solid #ddd",
    marginBottom: 10,
     boxSizing: "border-box",
  }}
/>
    <label style={{ display: "block", marginBottom: 10 }}>
  <input
    type="checkbox"
    checked={journalFavorite}
    onChange={(e) => setJournalFavorite(e.target.checked)}
  />
  {" "}Favorite Bottle
</label>
    <label style={{ display: "block", marginBottom: 10 }}>
  <input
    type="checkbox"
    checked={journalBuyAgain}
    onChange={(e) => setJournalBuyAgain(e.target.checked)}
  />
  {" "}Would Buy Again
</label>
    <input
  type="date"
  value={journalTastedOn}
  onChange={(e) => setJournalTastedOn(e.target.value)}
  style={{
    width: "100%",
    padding: 12,
    borderRadius: 12,
    border: "1px solid #ddd",
    marginBottom: 10,
     boxSizing: "border-box",
  }}
/>
    <input
  type="file"
  accept="image/*"
  onChange={(e) => setJournalPhoto(e.target.files[0])}
  style={{
    width: "100%",
    marginBottom: 12,
  }}
/>
    <AppButton onClick={saveJournalEntry}>
  {editingJournalId ? "Update Bottle" : "Save Bottle"}
</AppButton>

{journalMessage ? (
  <div
    style={{
      marginTop: 12,
      background: "#fffaf0",
      borderRadius: 14,
      padding: 12,
      color: "#555",
    }}
  >
    {journalMessage}
  </div>
) : null}
  </Card>
) : null}
          <div style={{ display: "grid", gap: 12 }}>
            {journalEntries.length === 0 ? (
  <Card style={{ marginTop: 14 }}>
    <p style={{ margin: 0, color: "#666" }}>
      No journal entries yet. Add your first bottle above.
    </p>
  </Card>
) : (
  journalEntries.map((entry) => (
    <Card key={entry.id} style={{ marginTop: 14 }}>
      {entry.photo_url ? (
 <img
  src={entry.photo_url}
  alt={entry.product_name}
  onClick={() => setFullscreenImage(entry.photo_url)}
  style={{
    width: "100%",
    borderRadius: 16,
    marginBottom: 12,
    objectFit: "contain",
    maxHeight: 400,
    background: "#f5f5f5",
    cursor: "pointer",
  }}
/>
) : null}
      <div style={{ fontSize: 12, fontWeight: 900, color: burgundy, textTransform: "uppercase" }}>
        {entry.category || "Journal Entry"}
      </div>

      <h3 style={{ margin: "6px 0 4px" }}>{entry.product_name}</h3>

      <p style={{ margin: "0 0 8px", color: "#666" }}>
        {[entry.producer, entry.vintage, entry.region].filter(Boolean).join(" • ")}
      </p>

      <div style={{ marginBottom: 8 }}>
        {"★".repeat(entry.rating_stars || 0)}
        {"☆".repeat(5 - (entry.rating_stars || 0))}
        {entry.rating_score ? `  ${entry.rating_score}/100` : ""}
      </div>

      <p style={{ margin: 0, color: "#444", lineHeight: 1.45 }}>
        {entry.notes}
      </p>

      <div style={{ marginTop: 10, fontSize: 13, color: burgundy, fontWeight: 800 }}>
        {entry.favorite ? "❤️ Favorite " : ""}
        {entry.buy_again ? " 🔁 Buy Again" : ""}
      </div>
      <button
  onClick={() => startEditJournalEntry(entry)}
  style={{
    marginTop: 12,
    marginRight: 8,
    border: 0,
    borderRadius: 12,
    padding: "10px 12px",
    background: burgundy,
    color: "white",
    fontWeight: 700,
    cursor: "pointer",
  }}
>
  Edit Entry
</button>
      <button
  onClick={() => deleteJournalEntry(entry.id)}
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
  Delete Entry
</button>
    </Card>
  ))
)}
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
<div
  style={{
    background: "#fff7e8",
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    fontSize: 13,
    color: "#7a5a00",
    lineHeight: 1.5,
  }}
>
  First time here? Use the email tied to your Addy’s membership. If you do not have a password yet, contact Tyler and/or Ryan for your invite link or password setup email.
</div>
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
          <button
  onClick={async () => {
    if (!email.trim()) {
      alert("Please enter your email first.");
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(
      email.trim().toLowerCase(),
      {
        redirectTo: "https://addys-clubhouse.vercel.app",
      }
    );

    if (error) {
      alert(error.message);
    } else {
      alert("Password reset email sent.");
    }
  }}
  style={{
    marginTop: 12,
    width: "100%",
    border: 0,
    background: "transparent",
    color: burgundy,
    fontWeight: 700,
    cursor: "pointer",
    fontSize: 14,
  }}
>
  Forgot Password?
</button>
        </Card>
      </div>
    </div>
  );
}
function CommunityBoardScreen({
  setActiveTab,
  currentMember,
  setFullscreenImage,
}) {
  const [posts, setPosts] = useState([]);
   const [reactions, setReactions] = useState([]);
   const [comments, setComments] = useState([]);
const [commentTextByPost, setCommentTextByPost] = useState({});
  const [content, setContent] = useState("");
  const [postImage, setPostImage] = useState(null);
  const [postMessage, setPostMessage] = useState("");
  const [isPosting, setIsPosting] = useState(false);
   const [editingPostId, setEditingPostId] = useState(null);
const [editingPostContent, setEditingPostContent] = useState("");

 useEffect(() => {
  loadCommunityPosts();
  loadCommunityReactions();
  loadCommunityComments();
}, []);

  const loadCommunityPosts = async () => {
    const { data, error } = await supabase
      .from("community_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setPosts(data);
    }
  };
const loadCommunityReactions = async () => {
  const { data, error } = await supabase
    .from("community_reactions")
    .select("*");

  if (!error && data) {
    setReactions(data);
  }
};
   const loadCommunityComments = async () => {
  const { data, error } = await supabase
    .from("community_comments")
    .select("*")
    .order("created_at", { ascending: true });

  if (!error && data) {
    setComments(data);
  }
};
   const toggleCommunityReaction = async (postId, reaction) => {
  if (!currentMember?.email) return;

  const existing = reactions.find(
    (item) =>
      item.post_id === postId &&
      item.member_email === currentMember.email
  );

  let error;

  if (existing?.reaction === reaction) {
    ({ error } = await supabase
      .from("community_reactions")
      .delete()
      .eq("id", existing.id));
  } else if (existing) {
    ({ error } = await supabase
      .from("community_reactions")
      .update({ reaction })
      .eq("id", existing.id));
  } else {
    ({ error } = await supabase
      .from("community_reactions")
      .insert({
        post_id: postId,
        member_email: currentMember.email,
        reaction,
      }));
  }

  if (error) {
    alert("Reaction failed: " + error.message);
     
    return;
  }

  await loadCommunityReactions();
};
   const addCommunityComment = async (postId) => {
  const text = commentTextByPost[postId]?.trim();

  if (!text) return;

  if (!currentMember?.email) {
    alert("Please log in to comment.");
    return;
  }

  const memberName =
    `${currentMember.first_name || ""} ${
      currentMember.last_name || ""
    }`.trim() ||
    currentMember.name ||
    currentMember.email;

  const { error } = await supabase
    .from("community_comments")
    .insert([
      {
        post_id: postId,
        member_email: currentMember.email,
        member_name: memberName,
        content: text,
      },
    ]);

  if (error) {
    alert("Comment failed: " + error.message);
    return;
  }

  setCommentTextByPost({
    ...commentTextByPost,
    [postId]: "",
  });

  await loadCommunityComments();
};
   const deleteCommunityComment = async (commentId) => {
  const confirmed = window.confirm("Delete this comment?");
  if (!confirmed) return;

  const { error } = await supabase
    .from("community_comments")
    .delete()
    .eq("id", commentId);

  if (error) {
    alert("Delete failed: " + error.message);
    return;
  }

  await loadCommunityComments();
};
   const saveCommunityPostEdit = async (postId) => {
  const text = editingPostContent.trim();

  if (!text) {
    alert("Post cannot be empty.");
    return;
  }

const { data, error } = await supabase
  .from("community_posts")
  .update({ content: text })
  .eq("id", postId)
  .eq("member_email", currentMember?.email)
  .select();


  if (error) {
    alert("Edit failed: " + error.message);
    return;
  }
if (!data || data.length === 0) {
  alert("No matching post was found to edit.");
  return;
}
  setEditingPostId(null);
  setEditingPostContent("");
  await loadCommunityPosts();
};
   const deleteCommunityPost = async (post) => {
  const confirmed = window.confirm(
    "Delete this post and all of its comments and reactions?"
  );
  if (!confirmed) return;

  if (post.image_url) {
    const fileName = post.image_url.split("/community-images/")[1];

    if (fileName) {
      await supabase.storage
        .from("community-images")
        .remove([decodeURIComponent(fileName)]);
    }
  }

  const { error } = await supabase
    .from("community_posts")
    .delete()
    .eq("id", post.id)
    .eq("member_email", currentMember?.email);

  if (error) {
    alert("Delete failed: " + error.message);
    return;
  }

  await loadCommunityPosts();
  await loadCommunityComments();
  await loadCommunityReactions();
};
  const createCommunityPost = async () => {
    if (!content.trim() && !postImage) {
      setPostMessage("Please add a message or photo.");
      return;
    }

    if (!currentMember?.email) {
      setPostMessage("Please log in to create a post.");
      return;
    }

    setIsPosting(true);
    setPostMessage("");

    let imageUrl = "";

    if (postImage) {
      const safeName = postImage.name.replace(/[^a-zA-Z0-9.-]/g, "-");
      const fileName = `${Date.now()}-${safeName}`;

      const { error: uploadError } = await supabase.storage
        .from("community-images")
        .upload(fileName, postImage);

      if (uploadError) {
        setPostMessage("Photo upload failed: " + uploadError.message);
        setIsPosting(false);
        return;
      }

      const { data } = supabase.storage
        .from("community-images")
        .getPublicUrl(fileName);

      imageUrl = data.publicUrl;
    }

    const memberName =
      `${currentMember.first_name || ""} ${
        currentMember.last_name || ""
      }`.trim() ||
      currentMember.name ||
      currentMember.email;

    const { error } = await supabase
      .from("community_posts")
      .insert([
        {
          member_email: currentMember.email,
          member_name: memberName,
          content: content.trim(),
          image_url: imageUrl || null,
        },
      ]);

    if (error) {
      setPostMessage("Post failed: " + error.message);
    } else {
      setContent("");
      setPostImage(null);
      setPostMessage("Posted successfully.");
      await loadCommunityPosts();
    }

    setIsPosting(false);
  };

  return (
    <div style={{ padding: 20, paddingBottom: 92 }}>
      <button
        type="button"
        onClick={() => setActiveTab("home")}
        style={{
          border: 0,
          background: "transparent",
          color: burgundy,
          fontWeight: 800,
          cursor: "pointer",
          padding: 0,
          marginBottom: 18,
        }}
      >
        Back to Home
      </button>

      <h1 style={{ margin: "0 0 6px", fontSize: 28 }}>
        Community Board
      </h1>

      <p style={{ margin: "0 0 18px", color: "#666" }}>
        Share bottles, dinners, winery tours, and Clubhouse moments.
      </p>

      <Card>
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="What are you drinking or exploring?"
          style={{
            width: "100%",
            minHeight: 100,
            borderRadius: 14,
            border: "1px solid #ddd",
            padding: 12,
            boxSizing: "border-box",
            fontFamily: "Arial, sans-serif",
            fontSize: 15,
            marginBottom: 12,
          }}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(event) => setPostImage(event.target.files[0])}
          style={{ marginBottom: 12 }}
        />

        <AppButton onClick={createCommunityPost}>
          {isPosting ? "Posting..." : "Share Post"}
        </AppButton>

        {postMessage ? (
          <div style={{ marginTop: 10, color: "#666" }}>
            {postMessage}
          </div>
        ) : null}
      </Card>

      <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
        {posts.map((post) => (
          <Card key={post.id}>
      <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  }}
>
  <div style={{ fontWeight: 800 }}>
    {post.member_name}
  </div>
<button
  type="button"
onClick={() => {
  setEditingPostId(post.id);
  setEditingPostContent(post.content || "");
}}
  style={{
    border: 0,
    background: "transparent",
    color: burgundy,
    fontWeight: 800,
    cursor: "pointer",
    fontSize: 12,
  }}
>
  Edit
</button>
  {post.member_email === currentMember?.email ? (
    <button
      type="button"
      onClick={() => deleteCommunityPost(post)}
      style={{
        border: 0,
        background: "transparent",
        color: burgundy,
        fontWeight: 800,
        cursor: "pointer",
        fontSize: 12,
      }}
    >
      Delete Post
    </button>
  ) : null}
</div>

            <div style={{ color: "#888", fontSize: 12, marginTop: 3 }}>
              {new Date(post.created_at).toLocaleString()}
            </div>

         {String(editingPostId) === String(post.id) ? (
  <div style={{ marginTop: 12 }}>
    <textarea
      value={editingPostContent}
      onChange={(event) => setEditingPostContent(event.target.value)}
      style={{
        width: "100%",
        minHeight: 90,
        borderRadius: 12,
        border: "1px solid #ddd",
        padding: 10,
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
        fontSize: 14,
        marginBottom: 8,
      }}
    />

    <div style={{ display: "flex", gap: 8 }}>
      <button
        type="button"
        onClick={() => saveCommunityPostEdit(post.id)}
        style={{
          border: 0,
          background: burgundy,
          color: "white",
          borderRadius: 12,
          padding: "8px 12px",
          fontWeight: 800,
          cursor: "pointer",
        }}
      >
        Save
      </button>

      <button
        type="button"
        onClick={() => {
          setEditingPostId(null);
          setEditingPostContent("");
        }}
        style={{
          border: "1px solid #ddd",
          background: "white",
          color: "#555",
          borderRadius: 12,
          padding: "8px 12px",
          fontWeight: 800,
          cursor: "pointer",
        }}
      >
        Cancel
      </button>
    </div>
  </div>
) : post.content ? (
  <p style={{ lineHeight: 1.5 }}>{post.content}</p>
) : null}

            {post.image_url ? (
              <img
                src={post.image_url}
                alt="Community post"
                onClick={() => setFullscreenImage(post.image_url)}
                style={{
                  width: "100%",
                  maxHeight: 400,
                  objectFit: "contain",
                  borderRadius: 16,
                  cursor: "pointer",
                }}
              />
            ) : null}
             <div
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 14,
  }}
>
  {[
    ["love", "❤️"],
    ["cheers", "🥂"],
    ["fire", "🔥"],
    ["wow", "🤩"],
    ["wine", "🍷"],
  ].map(([reaction, emoji]) => {
    const count = reactions.filter(
      (item) =>
        item.post_id === post.id &&
        item.reaction === reaction
    ).length;

    const selected = reactions.some(
      (item) =>
        item.post_id === post.id &&
        item.member_email === currentMember?.email &&
        item.reaction === reaction
    );

    return (
      <button
        key={reaction}
        type="button"
        onClick={() =>
          toggleCommunityReaction(post.id, reaction)
        }
        style={{
          border: selected
            ? `2px solid ${burgundy}`
            : "1px solid #ddd",
          background: selected ? blush : "white",
          borderRadius: 999,
          padding: "7px 10px",
          cursor: "pointer",
          fontSize: 16,
        }}
      >
        {emoji} {count || ""}
      </button>
    );
  })}
</div>
             <div style={{ marginTop: 14 }}>
  <div style={{ display: "grid", gap: 8, marginBottom: 10 }}>
    {comments
      .filter((comment) => comment.post_id === post.id)
      .map((comment) => (
        <div
          key={comment.id}
          style={{
            background: "#faf7f3",
            borderRadius: 12,
            padding: 10,
          }}
        >
         <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    gap: 8,
  }}
>
  <div style={{ fontWeight: 800, fontSize: 13 }}>
    {comment.member_name}
  </div>

  {comment.member_email === currentMember?.email ? (
    <button
      type="button"
      onClick={() => deleteCommunityComment(comment.id)}
      style={{
        border: 0,
        background: "transparent",
        color: burgundy,
        fontWeight: 800,
        cursor: "pointer",
        fontSize: 12,
      }}
    >
      Delete
    </button>
  ) : null}
</div>

<div style={{ color: "#555", marginTop: 4 }}>
  {comment.content}
</div>
        </div>
      ))}
  </div>

  <textarea
    value={commentTextByPost[post.id] || ""}
    onChange={(event) =>
      setCommentTextByPost({
        ...commentTextByPost,
        [post.id]: event.target.value,
      })
    }
    placeholder="Write a comment..."
    style={{
      width: "100%",
      minHeight: 60,
      borderRadius: 12,
      border: "1px solid #ddd",
      padding: 10,
      boxSizing: "border-box",
      fontFamily: "Arial, sans-serif",
      fontSize: 14,
      marginBottom: 8,
    }}
  />

  <button
    type="button"
    onClick={() => addCommunityComment(post.id)}
    style={{
      border: 0,
      background: burgundy,
      color: "white",
      borderRadius: 12,
      padding: "9px 12px",
      fontWeight: 800,
      cursor: "pointer",
    }}
  >
    Post Comment
  </button>
</div>
          </Card>
        ))}
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
const [fullscreenImage, setFullscreenImage] = useState(null);
 const [activeTab, setActiveTab] = useState("home");
   const [hasNewNotes, setHasNewNotes] = useState(false);
const [hasNewOffers, setHasNewOffers] = useState(false);
const [unreadNotes, setUnreadNotes] = useState(0);
const [unreadOffers, setUnreadOffers] = useState(0);
const [notifications, setNotifications] = useState([]);
   const [unreadNotifications, setUnreadNotifications] = useState(0);
  const [notificationsRead, setNotificationsRead] = useState(
  localStorage.getItem("notificationsRead") === "true"
);
const [showNotifications, setShowNotifications] = useState(false);
useEffect(() => {
  if (currentMember?.email) {
    loadNotifications();
    checkNewContentBadges();
  }
}, [currentMember]);
const loadNotifications = async () => {
  const { data, error } = await supabase
    .from("notifications")
    .select("*")
    .order("created_at", { ascending: false });

  if (!error && data) {
    setNotifications(data);

    const lastViewed = currentMember?.last_notifications_viewed;

    if (!lastViewed) {
      setUnreadNotifications(data.length);
    } else {
      setUnreadNotifications(
        data.filter(
          (notification) =>
            new Date(notification.created_at) > new Date(lastViewed)
        ).length
      );
    }
  }
};
   const checkNewContentBadges = async () => {
  if (!currentMember?.email) return;

  const notesLastSeenKey = `notesLastSeen:${currentMember.email}`;
  const offersLastSeenKey = `offersLastSeen:${currentMember.email}`;

  const notesLastSeen = localStorage.getItem(notesLastSeenKey);
  const offersLastSeen = localStorage.getItem(offersLastSeenKey);

  const { data: latestNotes } = await supabase
    .from("notes")
    .select("created_at")
    .order("created_at", { ascending: false })
    .limit(1);

  const { data: latestOffers } = await supabase
    .from("offers")
    .select("created_at")
    .order("created_at", { ascending: false })
    .limit(1);

  if (latestNotes?.[0]?.created_at) {
    setHasNewNotes(
      !notesLastSeen ||
        new Date(latestNotes[0].created_at) > new Date(notesLastSeen)
    );
  }

  if (latestOffers?.[0]?.created_at) {
    setHasNewOffers(
      !offersLastSeen ||
        new Date(latestOffers[0].created_at) > new Date(offersLastSeen)
    );
  }
};
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
  setFullscreenImage={setFullscreenImage}
  showNotifications={showNotifications}
  setShowNotifications={setShowNotifications}
  notificationsRead={notificationsRead}
setNotificationsRead={setNotificationsRead}
  notifications={notifications}
  setFullscreenImage={setFullscreenImage}
   unreadNotifications={unreadNotifications}
setUnreadNotifications={setUnreadNotifications}
/>
);
  if (activeTab === "calendar") screen = <CalendarScreen />;
  if (activeTab === "offers")
  screen = (
   <OffersScreen
  setFullscreenImage={setFullscreenImage}
  currentMember={currentMember}
/>
  );
  if (activeTab === "notes") screen = <NotesScreen
  currentMember={currentMember}
  setFullscreenImage={setFullscreenImage}
  currentMember={currentMember}
/>
  if (activeTab === "messages") {
  screen = <MessagesScreen currentMember={currentMember} />;
}
   if (activeTab === "community") {
  screen = (
    <CommunityBoardScreen
      setActiveTab={setActiveTab}
      currentMember={currentMember}
      setFullscreenImage={setFullscreenImage}
    />
  );
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
  onClick={() => {
    setActiveTab(tab.id);

    if (tab.id === "notes" && currentMember?.email) {
      localStorage.setItem(
        `notesLastSeen:${currentMember.email}`,
        new Date().toISOString()
      );
      setHasNewNotes(false);
    }

    if (tab.id === "offers" && currentMember?.email) {
      localStorage.setItem(
        `offersLastSeen:${currentMember.email}`,
        new Date().toISOString()
      );
      setHasNewOffers(false);
    }
  }}
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
                    <div
  style={{
    fontSize: 18,
    position: "relative",
    display: "inline-block",
  }}
>
  {tab.icon}

  {tab.id === "notes" && hasNewNotes ? (
    <span
      style={{
        position: "absolute",
        top: -4,
        right: -6,
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "#d50000",
      }}
    />
  ) : null}

  {tab.id === "offers" && hasNewOffers ? (
    <span
      style={{
        position: "absolute",
        top: -4,
        right: -6,
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "#d50000",
      }}
    />
  ) : null}
</div>
                    <div style={{ fontSize: 11 }}>{tab.label}</div>
                  </button>
                );
              })}
            
          </div>
        </div>
      </div>
      {fullscreenImage ? (
  <div
    onClick={() => setFullscreenImage(null)}
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.92)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 99999,
      padding: 20,
    }}
  >
    <img
      src={fullscreenImage}
      alt=""
      style={{
        maxWidth: "95%",
        maxHeight: "95%",
        objectFit: "contain",
      }}
    />
  </div>
) : null}
    </div>
  );
}
