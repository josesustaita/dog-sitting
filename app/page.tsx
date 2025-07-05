'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { useState } from 'react';

import logo from '@/public/IMG_4149.PNG.png';
import logoNb from '@/public/logonobg.png';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ─── Navbar ─── */}
      <header id="topNav" className="navbar">
        <div className="nav-wrap">
          <Link href="#top" className="brand">
            <Image src={logo.src} alt="logo" width={40} height={40} priority />
            <span>Home Away From Home</span>
          </Link>

          <button
            aria-label="Menu"
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={28} />
          </button>

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {[
              ['#about', 'About'],
              ['#pricing', 'Pricing'],
              ['#gallery', 'Gallery'],
              ['#policy', 'Pick-Up Policy'],
              ['#contact', 'Contact'],
              ['#intake', 'Intake Form'],
            ].map(([href, label]) => (
              <Link key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {/* ─────────── Hero ─────────── */}
        <section id="top" className="hero">
          <Image
            src={logoNb.src}
            alt="Home Away From Home logo"
            width={220}
            height={220}
            priority
          />
          <h1>
            A&nbsp;Second&nbsp;Home&nbsp;
            <span className="accent">for Your Best Friend</span>
          </h1>
          <p>Supervised play, cozy naps, and belly rubs included.</p>
          <a className="cta" href="tel:+12396584305">
            Call&nbsp;(239)&nbsp;658-4305
          </a>
        </section>

        {/* ─────────── About ─────────── */}
        <section id="about" className="section">
          <h2>About&nbsp;Us</h2>
          <p>
            At <strong>Home Away From Home Doggy Daycare and Boarding, LLC</strong>,
            we believe every dog deserves a safe, loving, and fun environment—
            whether it&apos;s for a few hours of playtime or an extended stay. We’re
            more than just a daycare; we’re a second home for your furry family
            member.
          </p>
          <p>
            Founded out of a deep love for animals and a commitment to quality
            care, our mission is to create a space where dogs feel comfortable,
            engaged, and cared for like family. We know how important peace of
            mind is when leaving your pet behind, and that’s exactly what we
            provide—along with plenty of tail wags and belly rubs.
          </p>
          <p className="bold-list-heading">Our facility offers:</p>
          <ul>
            <li>Supervised playgroups and one-on-one attention</li>
            <li>Clean, cozy rest areas and safe outdoor spaces</li>
            <li>Personalized care tailored to each dog’s needs</li>
            <li>A focus on positive interactions and healthy routines</li>
          </ul>
          <p>
            Whether your pup loves to play, snuggle, or just relax, we’re here to
            make their time away from home as joyful as possible. Thank you for
            trusting us with your beloved companion—we’re honored to be part of
            their extended pack!
          </p>
        </section>

        {/* ─────────── Pricing ─────────── */}
        <section id="pricing" className="section alt">
          <h2>Pricing</h2>
          <div className="cards">
            <div className="card">
              <h3>Overnight Boarding</h3>
              <p className="price">
                $50<span>/night</span>
              </p>
              <ul>
                <li>Free 1<sup>st</sup> night on stays&nbsp;&gt; 1 night</li>
                <li>10&nbsp;% off stays of 7&nbsp;+ nights</li>
                <li>Holiday&nbsp;weekends&nbsp;+&nbsp;$10/night</li>
              </ul>
            </div>

            <div className="card">
              <h3>
                Daycare <small>(late pick-up)</small>
              </h3>
              <ul>
                <li>Half-Day – $15 (pick-up before 12&nbsp;PM)</li>
                <li>Full-Day – $30 (pick-up after 12&nbsp;PM)</li>
                <li>Holiday&nbsp;weekends&nbsp;+&nbsp;$10</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─────────── Gallery ─────────── */}
        <section id="gallery" className="section">
          <h2>Happy&nbsp;Guests</h2>
          <p>Some recent pups enjoying their stay with us!</p>

          <div className="gallery-grid">
            {['/gallery/image1.png', '/gallery/image2.png', '/gallery/image3.png', '/gallery/image4.png'].map(
              (src) => (
                <Image key={src} src={src} alt="Guest dog" width={800} height={600} />
              ),
            )}
          </div>
        </section>

        {/* ─────────── Policy ─────────── */}
        <section id="policy" className="section">
          <h2>🐾 Overnight Boarding Pick-Up Policy</h2>
          <p>
            We want to keep your pup happy and your schedule flexible while maintaining
            clear guidelines for care and billing.
          </p>

          <h3>Pick-Up Times</h3>
          <ul>
            <li>
              <strong>Morning&nbsp;(no charge):</strong> Mon-Fri&nbsp;7–9&nbsp;AM ·
              Sat-Sun&nbsp;8–10&nbsp;AM
            </li>
            <li>
              <strong>Late pick-up → daycare fee applies:</strong>
              <table>
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Before 12&nbsp;PM</td>
                    <td>$15 (Half-Day)</td>
                  </tr>
                  <tr>
                    <td>After 12&nbsp;PM</td>
                    <td>$30 (Full-Day)</td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>

          <h3>Daycare Hours</h3>
          <p>Drop-Off 7–9&nbsp;AM · Pick-Up 5–7&nbsp;PM</p>
        </section>

        {/* ─────────── Contact ─────────── */}
        <section id="contact" className="section alt">
          <h2>Contact&nbsp;Us</h2>
          <div className="contact-grid">
            <div>
              <p>We prefer pet parents call to reserve a stay.</p>
              <p>
                <strong>Pamela:</strong>{' '}
                <a href="tel:+12396584305">(239)&nbsp;658-4305</a>
              </p>
              <p>
                <strong>Emmanuel:</strong>{' '}
                <a href="tel:+12396752077">(239)&nbsp;675-2077</a>
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:Hafhpetboardingllc@gmail.com">Hafhpetboardingllc@gmail.com</a>
              </p>

              <div className="social-icons">
                <a
                  aria-label="Instagram"
                  href="https://www.instagram.com/homeawayfromhomedoggydaycare"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  aria-label="Facebook"
                  href="https://www.facebook.com/profile.php?id=61578026673378"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </a>
                {/* <a
                  aria-label="TikTok"
                  href="https://www.tiktok.com/@homeawayfromhomedoggydaycare"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTiktok />
                </a> */}
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── Intake Form Notice ─────────── */}
        <section id="intake" className="section">
          <h2>Before You Book</h2>
          <p>Please fill out our online intake form prior to booking.</p>
          <a
            href="https://form.jotform.com/251853197369066"
            target="_blank"
            rel="noreferrer"
            className="cta"
          >
            Open Intake Form
          </a>
        </section>
      </main>

      {/* ─────────── Footer ─────────── */}
      <footer className="footer">
        <Image src={logoNb.src} alt="" width={28} height={28} />
        <span>© {new Date().getFullYear()} Home Away From Home, LLC</span>
      </footer>
    </>
  );
}
