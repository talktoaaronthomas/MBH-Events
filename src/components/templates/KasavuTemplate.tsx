'use client';

import React, { useEffect, useState } from 'react';
import { InvitationData } from '@/types/invitation';

const VARIANTS = {
  gold:    { bg: "#F6F0E1", paper: "#FBF7EC", zari: "#B38A35", accent: "#2F5D3A", ink: "#2B2419", muted: "#6E6353", dot: "#B3261E" },
  maroon:  { bg: "#F5EEE4", paper: "#FBF6EE", zari: "#B08A3E", accent: "#7A1F2B", ink: "#2A1D1A", muted: "#6F5E57", dot: "#9C2230" },
  peacock: { bg: "#F2F0E6", paper: "#FAF8F0", zari: "#A98838", accent: "#1E5361", ink: "#1E2426", muted: "#5E6663", dot: "#B3261E" }
};

const motif = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 13'><path d='M13 0l5.5 9h-11z M3 10l2.5-4 2.5 4z M18 10l2.5-4 2.5 4z M0 11h26v2H0z'/></svg>";
const zariMask = `url("data:image/svg+xml,${encodeURIComponent(motif)}")`;

const lamp = `<svg class="kasavu-lamp" viewBox="0 0 60 116" aria-hidden="true"><path class="kasavu-flame" d="M30 3c5 8 7.5 13 7.5 18a7.5 7.5 0 0 1-15 0C22.5 16 25 11 30 3z"/><path d="M10 32h40l-5 9H15z"/><rect x="27" y="41" width="6" height="46"/><ellipse cx="30" cy="54" rx="9" ry="3"/><ellipse cx="30" cy="72" rx="7" ry="2.5"/><path d="M17 87h26l7 14H10z"/><rect x="6" y="101" width="48" height="5" rx="2"/></svg>`;
const orn = `<div class="kasavu-orn" aria-hidden="true"><span></span><svg viewBox="0 0 10 10"><path d="M5 0l5 5-5 5-5-5z"/></svg><span></span></div>`;

const fmtDate = (iso: string) => {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
};

const fmtTime = (t: string) => {
  if (!t) return "";
  const parts = t.split(":");
  if (parts.length !== 2) return t;
  const [h, m] = parts.map(Number);
  const d = new Date(2000, 0, 1, h, m);
  return d.toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit" }).toUpperCase();
};

const mapUrl = (v: string, a: string) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent([v, a].filter(Boolean).join(", "));

export default function KasavuTemplate({ data }: { data: InvitationData }) {
  const v = VARIANTS[data.variant] || VARIANTS.gold;
  const c = data.couple || {};
  const S = data.sections || {};

  const [days, setDays] = useState('0');
  const [hours, setHours] = useState('0');
  const [mins, setMins] = useState('0');

  useEffect(() => {
    if (!data.date) return;
    const update = () => {
      const t = new Date(`${data.date}T${data.muhurtham?.start || "00:00"}:00`).getTime() - new Date().getTime();
      if (t > 0) {
        setDays(Math.floor(t / 864e5).toString());
        setHours((Math.floor(t / 36e5) % 24).toString());
        setMins((Math.floor(t / 6e4) % 60).toString());
      } else {
        setDays('-1');
      }
    };
    update();
    const int = setInterval(update, 30000);
    return () => clearInterval(int);
  }, [data.date, data.muhurtham?.start]);

  const Calendar = () => {
    if (!data.date) return null;
    const d = new Date(data.date + "T00:00:00");
    if (isNaN(d.getTime())) return null;
    const y = d.getFullYear(), m = d.getMonth();
    const first = (new Date(y, m, 1).getDay() + 6) % 7;
    const daysInMonth = new Date(y, m + 1, 0).getDate();
    
    return (
      <>
        <p className="kasavu-cal-head">{d.toLocaleDateString("en-IN", { month: "long", year: "numeric" })}</p>
        <div className="kasavu-cal">
          {["M", "T", "W", "T", "F", "S", "S"].map((x, i) => <b key={'h'+i}>{x}</b>)}
          {Array.from({ length: first }).map((_, i) => <span key={'e'+i}></span>)}
          {Array.from({ length: daysInMonth }).map((_, i) => (
            i + 1 === d.getDate() 
              ? <span key={'d'+i} className="on"><em>{i + 1}</em></span> 
              : <span key={'d'+i}>{i + 1}</span>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Spectral:ital,wght@0,400;0,600;1,400&family=Noto+Serif+Malayalam:wght@500&display=swap');
        
        .kasavu-inv {
          --bg: ${v.bg}; --paper: ${v.paper}; --zari: ${v.zari}; --accent: ${v.accent}; --ink: ${v.ink}; --muted: ${v.muted}; --dot: ${v.dot};
          --zari-mask: ${zariMask};
          color: var(--ink);
          font-family: Spectral, Georgia, "Times New Roman", serif;
          font-size: 16px;
          line-height: 1.6;
          background: var(--bg);
          text-align: center;
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;
        }
        .kasavu-inv * { box-sizing: border-box; }
        .kasavu-inv h1, .kasavu-inv h2, .kasavu-inv h3, .kasavu-inv p { margin: 0; }
        .kasavu-inv h2, .kasavu-inv .display { font-family: Marcellus, "Trajan Pro", Georgia, serif; font-weight: 400; letter-spacing: .02em; }
        
        .kasavu-zari {
          position: relative; height: 30px;
          background: linear-gradient(var(--zari),var(--zari)) top/100% 3px no-repeat,
                      linear-gradient(var(--zari),var(--zari)) bottom/100% 7px no-repeat;
        }
        .kasavu-zari::after {
          content: ""; position: absolute; left: 0; right: 0; top: 8px; height: 13px; background: var(--zari);
          -webkit-mask: var(--zari-mask) repeat-x left center/26px 13px; mask: var(--zari-mask) repeat-x left center/26px 13px;
        }
        .kasavu-zari.flip { transform: scaleY(-1); }
        
        .kasavu-hero { background: var(--paper); padding: 26px 24px 34px; }
        .kasavu-lamp { width: 46px; height: auto; display: block; margin: 0 auto 10px; fill: var(--zari); }
        .kasavu-flame { fill: #E39B2E; transform-origin: 30px 24px; animation: flicker 2.8s ease-in-out infinite; }
        @keyframes flicker { 0%,100%{transform:scale(1,1)} 40%{transform:scale(.94,1.06)} 70%{transform:scale(1.03,.97)} }
        
        .kasavu-ml { font-family: "Noto Serif Malayalam", serif; color: var(--accent); font-size: 18px; margin-bottom: 4px; }
        .kasavu-greeting { color: var(--muted); margin-bottom: 18px; font-size: 15px; }
        .kasavu-names { font-size: 44px; line-height: 1.05; color: var(--ink); }
        .kasavu-amp { display: block; font-family: Spectral, serif; font-style: italic; font-size: 22px; color: var(--zari); margin: 6px 0; }
        .kasavu-when { margin-top: 18px; font-size: 15px; letter-spacing: .04em; color: var(--accent); }
        
        .kasavu-arch { margin: 22px auto 0; width: 78%; aspect-ratio: 3/4; border-radius: 999px 999px 6px 6px; overflow: hidden; border: 4px double var(--zari); padding: 5px; background: var(--bg); }
        .kasavu-arch img { width: 100%; height: 100%; object-fit: cover; border-radius: 999px 999px 3px 3px; display: block; }
        
        .kasavu-sec { padding: 34px 24px; text-align: center; }
        .kasavu-sec + .kasavu-sec { padding-top: 6px; }
        .kasavu-orn { display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 12px; color: var(--zari); }
        .kasavu-orn span { height: 1px; width: 48px; background: currentColor; }
        .kasavu-orn svg { width: 14px; height: 14px; fill: currentColor; }
        .kasavu-sec h2 { font-size: 26px; margin-bottom: 14px; color: var(--ink); }
        .kasavu-msg { margin: 0 auto; max-width: 32ch; white-space: pre-line; }
        
        .kasavu-fam { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; text-align: center; }
        .kasavu-fam h3 { font-family: Marcellus, Georgia, serif; font-weight: 400; font-size: 20px; margin-bottom: 4px; }
        .kasavu-fam p { font-size: 14px; color: var(--muted); line-height: 1.5; }
        
        .kasavu-muhurtham { background: var(--accent); color: #FBF7EC; margin: 8px 16px; padding: 28px 20px; border-radius: 4px; border: 1px solid var(--zari); outline: 1px solid var(--zari); outline-offset: -7px; text-align: center; }
        .kasavu-muhurtham h2 { color: #FBF7EC; font-size: 24px; margin-bottom: 4px; }
        .kasavu-muhurtham .big { font-family: Marcellus, Georgia, serif; font-size: 22px; }
        .kasavu-muhurtham .sub { margin: 2px 0 16px; opacity: .85; font-size: 15px; }
        
        .kasavu-cal { display: grid; grid-template-columns: repeat(7,1fr); gap: 2px; max-width: 280px; margin: 0 auto; font-size: 13px; }
        .kasavu-cal b { font-weight: 600; opacity: .7; font-size: 11px; padding-bottom: 4px; }
        .kasavu-cal span { aspect-ratio: 1; display: grid; place-items: center; position: relative; }
        .kasavu-cal span.on { color: #fff; font-weight: 600; }
        .kasavu-cal span.on::before { content: ""; position: absolute; inset: 14%; border-radius: 50%; background: var(--dot); border: 1.5px solid var(--zari); z-index: 0; }
        .kasavu-cal span.on em { position: relative; font-style: normal; }
        .kasavu-cal-head { font-family: Marcellus, Georgia, serif; font-size: 17px; margin-bottom: 8px; color: var(--zari); }
        
        .kasavu-cd { display: flex; justify-content: center; gap: 18px; margin-top: 18px; }
        .kasavu-cd div { min-width: 48px; }
        .kasavu-cd strong { display: block; font-family: Marcellus, Georgia, serif; font-size: 26px; font-weight: 400; line-height: 1.1; }
        .kasavu-cd small { font-size: 12px; opacity: .8; }
        
        .kasavu-venue { background: var(--paper); border-top: 1px solid var(--zari); border-bottom: 1px solid var(--zari); padding: 18px; margin-bottom: 14px; }
        .kasavu-venue h3 { font-family: Marcellus, Georgia, serif; font-weight: 400; font-size: 19px; }
        .kasavu-venue .t { color: var(--accent); margin: 2px 0 6px; font-size: 15px; }
        .kasavu-venue p { color: var(--muted); font-size: 14px; }
        .kasavu-venue a { display: inline-block; margin-top: 10px; color: var(--accent); font-size: 14px; text-underline-offset: 3px; }
        
        .kasavu-tl { list-style: none; margin: 0 auto; padding: 0; max-width: 300px; text-align: left; position: relative; }
        .kasavu-tl::before { content: ""; position: absolute; left: 62px; top: 8px; bottom: 8px; width: 1px; background: var(--zari); }
        .kasavu-tl li { display: grid; grid-template-columns: 54px 1fr; gap: 20px; padding: 8px 0; position: relative; }
        .kasavu-tl li::before { content: ""; position: absolute; left: 58px; top: 16px; width: 9px; height: 9px; transform: rotate(45deg); background: var(--paper); border: 1.5px solid var(--zari); }
        .kasavu-tl time { font-size: 14px; color: var(--accent); text-align: right; }
        
        .kasavu-gal { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
        .kasavu-gal img { width: 100%; aspect-ratio: 1; object-fit: cover; display: block; }
        .kasavu-gal img:first-child:nth-last-child(odd) { grid-column: 1/-1; aspect-ratio: 4/3; }
        
        .kasavu-fbox { display: grid; gap: 10px; text-align: left; max-width: 320px; margin: 0 auto; }
        .kasavu-fbox label { display: grid; gap: 4px; font-size: 14px; color: var(--muted); }
        .kasavu-fbox input, .kasavu-fbox textarea, .kasavu-fbox select { font: inherit; font-size: 15px; color: var(--ink); background: var(--paper); border: 1px solid color-mix(in srgb, var(--zari) 55%, transparent); border-radius: 3px; padding: 9px 10px; }
        .kasavu-choice { display: flex; gap: 8px; }
        .kasavu-choice button { flex: 1; font: inherit; font-size: 15px; padding: 9px; border: 1px solid var(--zari); background: var(--paper); color: var(--ink); border-radius: 3px; cursor: pointer; }
        .kasavu-choice button[aria-pressed="true"] { background: var(--accent); color: #FBF7EC; border-color: var(--accent); }
        .kasavu-send { font: inherit; font-size: 16px; padding: 11px; border: 0; border-radius: 3px; background: var(--zari); color: #fff; cursor: pointer; }
        
        .kasavu-foot { text-align: center; padding: 26px 24px 30px; background: var(--paper); }
        .kasavu-foot .display { font-size: 24px; }
      `}} />

      <div className="kasavu-inv">
        <div className="kasavu-zari"></div>
        <section className="kasavu-hero">
          <div dangerouslySetInnerHTML={{ __html: lamp }} />
          <p className="kasavu-ml">ശുഭവിവാഹം</p>
          <p className="kasavu-greeting">{data.greeting}</p>
          <h1 className="display kasavu-names">{c.bride}<span className="kasavu-amp">and</span>{c.groom}</h1>
          <p className="kasavu-when">{fmtDate(data.date)}</p>
          {data.heroPhoto && (
            <div className="kasavu-arch"><img src={data.heroPhoto} alt={`${c.bride} and ${c.groom}`} /></div>
          )}
        </section>
        <div className="kasavu-zari flip"></div>

        <section className="kasavu-sec">
          <div dangerouslySetInnerHTML={{ __html: orn }} />
          <p className="kasavu-msg">{data.message}</p>
        </section>

        {S.family && (
          <section className="kasavu-sec">
            <div className="kasavu-fam">
              <div><h3>{c.bride}</h3><p dangerouslySetInnerHTML={{__html: (c.brideFamily || '').replace(/\\n/g,"<br>") }}></p></div>
              <div><h3>{c.groom}</h3><p dangerouslySetInnerHTML={{__html: (c.groomFamily || '').replace(/\\n/g,"<br>") }}></p></div>
            </div>
          </section>
        )}

        <section className="kasavu-muhurtham">
          <h2>Muhurtham</h2>
          <p className="big">{fmtTime(data.muhurtham?.start)}{data.muhurtham?.end ? " – " + fmtTime(data.muhurtham.end) : ""}</p>
          <p className="sub">{fmtDate(data.date)}</p>
          {S.countdown && (
            <>
              <Calendar />
              {Number(days) >= 0 ? (
                <div className="kasavu-cd">
                  <div><strong>{days}</strong><small>days</small></div>
                  <div><strong>{hours}</strong><small>hours</small></div>
                  <div><strong>{mins}</strong><small>minutes</small></div>
                </div>
              ) : (
                <p className="sub" style={{marginTop: 16}}>Today is the day.</p>
              )}
            </>
          )}
        </section>

        <section className="kasavu-sec">
          <div dangerouslySetInnerHTML={{ __html: orn }} />
          <h2>Where</h2>
          
          <div className="kasavu-venue">
            <h3>{data.ceremony?.venue}</h3>
            <p className="t">Wedding · {fmtTime(data.muhurtham?.start)}</p>
            <p>{data.ceremony?.address}</p>
            <a href={mapUrl(data.ceremony?.venue || '', data.ceremony?.address || '')} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
          </div>

          {data.reception?.enabled && (
            <div className="kasavu-venue">
              <h3>{data.reception.venue}</h3>
              <p className="t">
                Reception · {fmtTime(data.reception.time)}
                {data.reception.date && data.reception.date !== data.date ? ", " + fmtDate(data.reception.date) : ""}
              </p>
              <p>{data.reception.address}</p>
              <a href={mapUrl(data.reception.venue, data.reception.address)} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
            </div>
          )}

          {data.dress?.enabled && data.dress?.text && (
            <p className="kasavu-msg" style={{marginTop: 8}}><em>{data.dress.text}</em></p>
          )}
        </section>

        {S.timeline && data.timeline && data.timeline.length > 0 && (
          <section className="kasavu-sec">
            <div dangerouslySetInnerHTML={{ __html: orn }} />
            <h2>The day</h2>
            <ol className="kasavu-tl">
              {data.timeline.map((t, i) => (
                <li key={i}><time>{fmtTime(t.time)}</time><span>{t.title}</span></li>
              ))}
            </ol>
          </section>
        )}

        {S.gallery && data.photos && data.photos.length > 0 && (
          <section className="kasavu-sec">
            <div dangerouslySetInnerHTML={{ __html: orn }} />
            <h2>Moments</h2>
            <div className="kasavu-gal">
              {data.photos.map((p, i) => (
                <img key={i} src={p} alt={`Photo ${i+1}`} />
              ))}
            </div>
          </section>
        )}

        {S.rsvp && (
          <section className="kasavu-sec">
            <div dangerouslySetInnerHTML={{ __html: orn }} />
            <h2>Will you join us?</h2>
            {data.rsvpBy && <p className="kasavu-msg" style={{marginBottom: 16}}>Kindly reply by {fmtDate(data.rsvpBy)}</p>}
            
            <div className="kasavu-fbox">
              <label>Your name<input placeholder="e.g. Joseph Uncle" /></label>
              <div className="kasavu-choice">
                <button type="button" aria-pressed="true">Joyfully attending</button>
                <button type="button">Unable to come</button>
              </div>
              <label>Number of guests
                <select defaultValue="2">
                  {[1,2,3,4,5,6].map(n => <option key={n}>{n}</option>)}
                </select>
              </label>
              <button className="kasavu-send" type="button">Send reply</button>
            </div>
          </section>
        )}

        {S.guestbook && (
          <section className="kasavu-sec">
            <div dangerouslySetInnerHTML={{ __html: orn }} />
            <h2>Blessings</h2>
            <div className="kasavu-fbox">
              <label>Your wish for the couple<textarea></textarea></label>
              <label>From<input placeholder="Your name" /></label>
              <button className="kasavu-send" type="button">Post wish</button>
            </div>
          </section>
        )}

        <div className="kasavu-zari"></div>
        <footer className="kasavu-foot">
          <p className="display">{c.bride} & {c.groom}</p>
          <p style={{ color: "var(--muted)", fontSize: 14 }}>With love and gratitude</p>
        </footer>
        <div className="kasavu-zari flip"></div>
      </div>
    </>
  );
}
