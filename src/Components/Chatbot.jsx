import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const keywordReplies = [
    // Plumbing
    {
      keywords: [
        'plumber', 'plumbing', 'pipe', 'leak', 'drain', 'clog', 'tap', 'faucet', 'toilet',
        'sink', 'water heater', 'sewer', 'valve', 'burst pipe', 'water leakage', 'water pipe',
        'dripping', 'water tank', 'blocked drain', 'septic tank', 'emergency plumber', 'fix leak',
        'pipe replacement', 'water pressure', 'flush problem', 'water dripping', 'pipe burst',
      ],
      reply: 'We offer expert plumbing services including leak repairs, pipe replacements, drain cleaning, and emergency plumbing. How can I assist you?'
    },
    // Electrical
    {
      keywords: [
        'electrician', 'electric', 'wiring', 'power', 'outage', 'socket', 'switch', 'circuit', 'breaker',
        'light', 'fan', 'voltage', 'current', 'fuse', 'electricity', 'short circuit', 'electrical panel',
        'wire repair', 'electric shock', 'install light', 'fix wiring', 'emergency electrician', 'power failure',
        'ceiling fan installation', 'light fixture', 'charger', 'power surge', 'electric repair',
      ],
      reply: 'Our electricians handle wiring, power outages, switch repairs, light installation, and electrical safety inspections.'
    },
    // Cleaning
    {
      keywords: [
        'cleaning', 'maid', 'housekeeping', 'dust', 'vacuum', 'deep clean', 'sanitize', 'carpet', 'window cleaning',
        'floor', 'mop', 'trash', 'garbage', 'bathroom cleaning', 'kitchen cleaning', 'room cleaning', 'home cleaning',
        'office cleaning', 'disinfect', 'spring cleaning', 'after party cleaning', 'move out cleaning', 'cleaning service',
        'garage cleaning', 'sofa cleaning', 'curtain cleaning', 'upholstery', 'carpet stain', 'wall cleaning',
      ],
      reply: 'We provide home and office cleaning services, including deep cleaning, carpet and upholstery cleaning, and sanitization.'
    },
    // Carpentry
    {
      keywords: [
        'carpenter', 'woodwork', 'furniture', 'table', 'chair', 'door', 'window frame', 'cabinet',
        'shelf', 'drawer', 'wood repair', 'wooden floor', 'carving', 'joinery', 'wood installation',
        'fix furniture', 'custom furniture', 'repair door', 'wood polish', 'wooden stairs', 'deck repair',
        'wood paneling', 'wood finishing', 'door frame', 'wardrobe repair',
      ],
      reply: 'Our carpenters provide custom furniture making, repair, woodwork, door/window framing, and wood finishing services.'
    },
    // Painting
    {
      keywords: [
        'painting', 'paint', 'wall', 'ceiling', 'brush', 'roller', 'primer', 'color', 'interior painting',
        'exterior painting', 'paint job', 'wallpaper', 'paint removal', 'decorative paint', 'spray paint',
        'house painting', 'office painting', 'paint touch-up', 'paint color', 'wall art', 'texture painting',
        'graffiti removal', 'mural painting',
      ],
      reply: 'We provide painting services for homes and offices including interior, exterior, decorative finishes, and wallpaper installation.'
    },
    // Pest Control
    {
      keywords: [
        'pest control', 'insect', 'cockroach', 'ants', 'termite', 'rodent', 'rat', 'mouse', 'bed bug', 
        'mosquito', 'spider', 'wasp', 'bee', 'flea', 'pest removal', 'extermination', 'pest inspection',
        'fumigation', 'bug spray', 'rodent control', 'insecticide', 'pest infestation', 'cockroach spray',
        'termite treatment', 'mosquito control',
      ],
      reply: 'Our pest control services cover insect and rodent removal, fumigation, termite treatment, and prevention.'
    },
    // Gardening
    {
      keywords: [
        'gardening', 'lawn', 'garden', 'plants', 'trees', 'mowing', 'watering', 'pruning', 'landscaping',
        'hedge', 'flowers', 'soil', 'fertilizer', 'weeds', 'yard maintenance', 'tree trimming', 'garden design',
        'plant care', 'lawn care', 'sprinkler system', 'garden lighting', 'landscape design', 'tree removal',
        'garden cleanup',
      ],
      reply: 'We offer gardening and landscaping including lawn mowing, tree trimming, plant care, and garden design.'
    },
    // Appliance Repair
    {
      keywords: [
        'appliance repair', 'fridge', 'refrigerator', 'washing machine', 'dryer', 'oven', 'microwave',
        'dishwasher', 'air conditioner', 'heater', 'electric appliance', 'maintenance', 'repair service',
        'AC repair', 'fridge not cooling', 'washing machine not spinning', 'oven not heating',
        'microwave repair', 'dryer not drying', 'dishwasher leaking',
      ],
      reply: 'Our technicians repair home appliances like refrigerators, washing machines, ovens, microwaves, and AC units.'
    },
    // Roofing
    {
      keywords: [
        'roofing', 'roof', 'leak', 'shingles', 'tiles', 'gutter', 'repair', 'installation', 'waterproofing',
        'insulation', 'roof maintenance', 'roof replacement', 'roof damage', 'roof cleaning', 'roof leak repair',
        'gutter cleaning', 'roof inspection',
      ],
      reply: 'We provide roofing repairs, shingle replacement, gutter cleaning, waterproofing, and maintenance.'
    },
    // Moving
    {
      keywords: [
        'moving', 'relocation', 'packaging', 'transport', 'furniture moving', 'loading', 'unloading',
        'storage', 'movers', 'removal service', 'office moving', 'home moving', 'packing service',
        'unpacking', 'move help',
      ],
      reply: 'Our moving services include packing, transport, loading/unloading, and storage solutions for home and office.'
    },
    // Car Services
    {
      keywords: [
        'car', 'vehicle', 'car repair', 'car maintenance', 'car wash', 'auto service', 'car mechanic', 'oil change',
        'tire change', 'engine', 'brakes', 'battery', 'car cleaning', 'vehicle inspection', 'car detailing',
        'car battery', 'car radiator', 'transmission', 'car accessories', 'car tuning', 'auto electrician',
        'car problem', 'car service', 'car noise', 'car overheating', 'flat tire', 'engine check',
      ],
      reply: 'We offer car repairs, maintenance, washing, oil changes, tire replacements, battery checks, and more.'
    },
    // Security
    {
      keywords: [
        'security', 'cctv', 'camera', 'alarm', 'doorbell', 'surveillance', 'lock', 'locksmith', 'security system',
        'safe', 'security camera', 'installation', 'key replacement', 'lock repair', 'home security',
        'access control', 'security alarm', 'video surveillance',
      ],
      reply: 'Our security services include CCTV installation, alarm systems, locksmith work, and home security solutions.'
    },
    // Internet and Network
    {
      keywords: [
        'internet', 'wifi', 'broadband', 'network', 'router', 'setup', 'slow internet', 'connection',
        'modem', 'internet speed', 'network issue', 'wifi problem', 'network installation',
      ],
      reply: 'We assist with internet and wifi setup, network troubleshooting, and connectivity improvements.'
    },
    // Appliance Installation
    {
      keywords: [
        'appliance installation', 'install', 'setup', 'assemble', 'air conditioner installation',
        'furniture assembly', 'tv mounting', 'appliance setup', 'dishwasher installation',
        'oven installation', 'washing machine installation',
      ],
      reply: 'We provide installation and assembly for appliances, furniture, TVs, and other household equipment.'
    },
    // Emergency Services
    {
      keywords: [
        'emergency', 'urgent', 'fast', 'immediate', 'quick', 'asap', 'emergency service', 'emergency repair',
        'urgent repair', '24/7 service',
      ],
      reply: 'We offer 24/7 emergency repair services for plumbing, electrical, and other urgent home service needs.'
    },
    // Pricing / Quote
    {
      keywords: [
        'quote', 'price', 'cost', 'estimate', 'how much', 'pricing', 'charge', 'fee', 'rates',
        'cost estimate', 'pricing details',
      ],
      reply: 'Please share the service details and we will provide a detailed price estimate.'
    },
    // Booking / Scheduling
    {
      keywords: [
        'availability', 'book', 'appointment', 'schedule', 'when', 'time', 'date', 'available', 'opening hours',
        'working hours', 'office hours', 'appointment booking',
      ],
      reply: 'Please let us know your preferred date and time, and we will check availability for you.'
    },
    // Washing Services (Laundry, Car Wash, etc.)
    {
      keywords: [
        'wash', 'laundry', 'clothes wash', 'car wash', 'dry cleaning', 'cleaning clothes', 'laundry service',
        'wash and fold', 'vehicle cleaning', 'car detailing', 'car cleaning', 'laundry pickup', 'clothes dry',
      ],
      reply: 'We provide laundry and car wash services with convenient pickup and delivery options.'
    },
    // Hair and Beauty Services
    {
      keywords: [
        'hair', 'hairstyle', 'haircut', 'hair coloring', 'salon', 'spa', 'massage', 'beauty', 'manicure', 'pedicure',
        'facial', 'waxing', 'skincare', 'makeup', 'beauty treatment', 'hair treatment', 'barber', 'hair stylist',
        'hair wash', 'beauty salon', 'spa services', 'body massage', 'head massage', 'nail care',
      ],
      reply: 'We offer haircuts, styling, coloring, spa treatments, massages, manicures, pedicures, and skincare services.'
    },
    // General Greetings and Polite Phrases
    {
      keywords: [
        'hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'thanks', 'thank you', 'please',
        'sorry', 'help', 'how are you', 'what is your name', 'who are you', 'bye', 'goodbye', 'see you',
      ],
      reply: 'Hello! How can I assist you today? Feel free to ask me anything about our services.'
    },
    // Refund and Policy
    {
      keywords: [
        'refund', 'return', 'cancel', 'policy', 'terms', 'conditions', 'guarantee', 'warranty',
        'money back', 'complaint', 'dispute', 'customer service', 'support',
      ],
      reply: 'For refunds, cancellations, or complaints, please contact our support team at support@example.com.'
    },
    // Contact Info
    {
      keywords: [
        'contact', 'phone', 'email', 'address', 'location', 'customer support', 'helpdesk',
      ],
      reply: 'You can reach us at contact@casaswift.com or call +1 234 567 890. We are here to help!'
    },
  ];

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = input.trim().toLowerCase();
    setMessages(prev => [...prev, { from: 'user', text: input }]);
    setInput('');

    // Check for matching keywords
    let foundReply = null;
    for (const entry of keywordReplies) {
      if (entry.keywords.some(kw => userMessage.includes(kw))) {
        foundReply = entry.reply;
        break;
      }
    }

    if (!foundReply) {
      foundReply = "Sorry, I didn't quite understand that. Can you please rephrase or ask about a specific service?";
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'bot', text: foundReply }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {isOpen ? (
        <div className="bg-white shadow-xl rounded-lg w-80 max-w-[90vw] flex flex-col">
          <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">CasaSwift Chatbot</h3>
            <button onClick={() => setIsOpen(false)} className="text-white font-bold text-xl leading-none">✖</button>
          </div>
          <div className="p-3 h-72 overflow-y-auto space-y-2 text-sm flex-1">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-md max-w-[85%] break-words ${
                  msg.from === 'bot'
                    ? 'bg-gray-200 text-left'
                    : 'bg-blue-600 text-white ml-auto text-right'
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex border-t p-2">
            <input
              type="text"
              className="flex-1 border px-3 py-2 text-sm rounded-l-md focus:outline-none"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              autoFocus
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-4 rounded-r-md font-semibold"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg font-semibold"
        >
          💬 Chat
        </button>
      )}
    </div>
  );
};

export default Chatbot;