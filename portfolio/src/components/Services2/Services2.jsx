import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import './Services2.css';

const Services2 = () => {

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
      const handleScroll = () => {
          if (!isVisible && ref.current.getBoundingClientRect().top < window.innerHeight * 0.75) {
              setIsVisible(true);
          }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="k1">
      <motion.div 
        initial={{ opacity: 0, y: 300 }} 
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 150 }} 
        transition={{ duration: 1 }}
        ref={ref}
      >
      <div className="k2">
        <div className="k3">
          <svg xmlns="http://www.w3.org/2000/svg" height="55" width="55" viewBox="0 0 512 512"><path d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
          <h2>Graphic Designer</h2>
          <p>Graphic design services encompass a diverse range, including logo and branding, print and web design, advertising graphics, illustration, motion graphics, typography, UI/UX design, consultation, and more, catering to various visual communication needs.</p>
        </div>
        <div className="k3">
          <svg xmlns="http://www.w3.org/2000/svg" height="55" width="55" viewBox="0 0 576 512"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z"/></svg>
          <h2>UI/UX Designer</h2>
          <p>I provide services focused on creating intuitive digital experiences through user research, wireframing, UI design, usability testing, and collaboration with development teams.</p>
        </div>
        <div className="k3">
          <svg xmlns="http://www.w3.org/2000/svg" height="60" width="60" viewBox="0 0 512 512"><path  d="M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7 212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4 103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7 49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1 45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9 496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z"/></svg>
          <h2>Product Designer</h2>
          <p>Product designers are not just artists; they're strategic partners who bridge the gap between your initial idea and a successful product. Their expertise spans the entire product lifecycle, from understanding your target audience to crafting a user-friendly experience and ensuring smooth development. </p>
        </div>
      </div>


      <div className="k2">
        <div className="k3">
        <svg xmlns="http://www.w3.org/2000/svg" height="62" width="65" viewBox="0 0 640 512"><path fill="#f23a3a" d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg>
          <h2>Frontend development</h2>
          <p>I offer frontend development services, specializing in responsive websites with HTML, CSS, and JavaScript. My expertise includes intuitive UI/UX design, SPAs with React and Vue.js, PWAs for offline access, and mobile app development with Flutterflow.</p>
        </div>
        <div className="k3">
        <svg xmlns="http://www.w3.org/2000/svg" height="60" width="62.5" viewBox="0 0 640 512"><path fill="#F23a3a" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
          <h2>websites management</h2>
          <p>Efficiently oversee and maintain websites to ensure optimal performance and user satisfaction. Services include regular content updates, technical maintenance, security enhancements (SSL, backups), SEO optimization for improved visibility, and analytics to track performance and inform strategic decisions.</p>
        </div>
        <div className="k3">
          <svg viewBox="0 0 1024 1024" fill="#f23a3a" class="icon" version="10.1" xmlns="http://www.w3.org/2000/svg" stroke="#f23a3a"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M40.82 112.086c-4.42 0-8.074-3.578-8.074-7.996 0-4.42 3.498-7.998 7.902-7.998h0.172a8.002 8.002 0 0 1 7.996 7.998 8.002 8.002 0 0 1-7.996 7.996zM72.806 112.086c-4.42 0-8.074-3.578-8.074-7.996 0-4.42 3.498-7.998 7.902-7.998h0.172a8.002 8.002 0 0 1 7.996 7.998 8.002 8.002 0 0 1-7.996 7.996zM104.792 112.086c-4.42 0-8.074-3.578-8.074-7.996 0-4.42 3.498-7.998 7.902-7.998h0.172a8.002 8.002 0 0 1 7.996 7.998 8.002 8.002 0 0 1-7.996 7.996z" fill=""></path><path d="M871.958 128.078H8.352a7.99 7.99 0 0 1-7.996-7.996v-15.992c0-13.228 10.76-23.99 23.988-23.99h831.622c13.226 0 23.988 10.762 23.988 23.99v15.992a7.992 7.992 0 0 1-7.996 7.996zM16.348 112.086H863.96v-7.996c0-4.342-3.656-7.998-7.996-7.998H24.344a8.012 8.012 0 0 0-7.996 7.998v7.996z" fill=""></path><path d="M871.958 399.954a7.99 7.99 0 0 1-7.996-7.996V120.082c0-4.42 3.576-7.996 7.996-7.996s7.996 3.576 7.996 7.996v271.876a7.994 7.994 0 0 1-7.996 7.996zM8.352 703.822a8 8 0 0 1-7.996-7.996V120.082c0-4.42 3.576-7.996 7.996-7.996s7.996 3.576 7.996 7.996v575.744a8 8 0 0 1-7.996 7.996z" fill=""></path><path d="M392.176 703.822H8.352a8 8 0 0 1-7.996-7.996 7.98 7.98 0 0 1 7.996-7.996h383.824a7.98 7.98 0 0 1 7.996 7.996 8 8 0 0 1-7.996 7.996z" fill=""></path><path d="M40.336 703.822a8 8 0 0 1-7.996-7.996V120.082c0-4.42 3.576-7.996 7.996-7.996s7.998 3.576 7.998 7.996v575.744a8.002 8.002 0 0 1-7.998 7.996z" fill=""></path><path d="M24.344 176.056H8.352A7.992 7.992 0 0 1 0.356 168.06a7.992 7.992 0 0 1 7.996-7.998h15.992a7.992 7.992 0 0 1 7.996 7.998 7.99 7.99 0 0 1-7.996 7.996zM24.344 224.034H8.352a7.992 7.992 0 0 1-7.996-7.996 7.992 7.992 0 0 1 7.996-7.998h15.992a7.992 7.992 0 0 1 7.996 7.998 7.99 7.99 0 0 1-7.996 7.996zM24.344 272.012H8.352c-4.42 0-7.996-3.576-7.996-7.996s3.576-7.996 7.996-7.996h15.992c4.42 0 7.996 3.576 7.996 7.996s-3.576 7.996-7.996 7.996zM24.344 319.99H8.352c-4.42 0-7.996-3.576-7.996-7.996s3.576-7.996 7.996-7.996h15.992c4.42 0 7.996 3.576 7.996 7.996s-3.576 7.996-7.996 7.996zM24.344 367.968H8.352c-4.42 0-7.996-3.576-7.996-7.996s3.576-7.998 7.996-7.998h15.992c4.42 0 7.996 3.578 7.996 7.998s-3.576 7.996-7.996 7.996zM24.344 415.946H8.352c-4.42 0-7.996-3.576-7.996-7.996s3.576-7.998 7.996-7.998h15.992c4.42 0 7.996 3.578 7.996 7.998s-3.576 7.996-7.996 7.996zM24.344 463.924H8.352c-4.42 0-7.996-3.576-7.996-7.996s3.576-7.996 7.996-7.996h15.992c4.42 0 7.996 3.576 7.996 7.996s-3.576 7.996-7.996 7.996zM24.344 511.902H8.352c-4.42 0-7.996-3.576-7.996-7.996s3.576-7.996 7.996-7.996h15.992c4.42 0 7.996 3.576 7.996 7.996s-3.576 7.996-7.996 7.996zM24.344 559.888H8.352a8 8 0 0 1-7.996-7.996 7.982 7.982 0 0 1 7.996-7.998h15.992a7.982 7.982 0 0 1 7.996 7.998 8 8 0 0 1-7.996 7.996zM24.344 607.868H8.352a8.002 8.002 0 0 1-7.996-7.996 7.98 7.98 0 0 1 7.996-7.998h15.992a7.98 7.98 0 0 1 7.996 7.998 8.002 8.002 0 0 1-7.996 7.996zM24.344 655.844H8.352a8 8 0 0 1-7.996-7.996 7.98 7.98 0 0 1 7.996-7.996h15.992a7.98 7.98 0 0 1 7.996 7.996 8 8 0 0 1-7.996 7.996zM152.286 176.056H88.314a7.992 7.992 0 0 1-7.996-7.996 7.992 7.992 0 0 1 7.996-7.998h63.97a7.992 7.992 0 0 1 7.996 7.998 7.988 7.988 0 0 1-7.994 7.996zM440.154 224.034H216.256a7.992 7.992 0 0 1-7.996-7.996 7.992 7.992 0 0 1 7.996-7.998h223.898a7.992 7.992 0 0 1 7.996 7.998 7.99 7.99 0 0 1-7.996 7.996zM184.272 224.034H104.306a7.992 7.992 0 0 1-7.996-7.996 7.992 7.992 0 0 1 7.996-7.998h79.964a7.992 7.992 0 0 1 7.996 7.998 7.988 7.988 0 0 1-7.994 7.996zM632.066 272.012H424.16c-4.418 0-7.996-3.576-7.996-7.996s3.578-7.996 7.996-7.996h207.906c4.42 0 7.996 3.576 7.996 7.996s-3.576 7.996-7.996 7.996zM728.024 272.012h-63.972c-4.418 0-7.996-3.576-7.996-7.996s3.578-7.996 7.996-7.996h63.972c4.418 0 7.996 3.576 7.996 7.996s-3.578 7.996-7.996 7.996zM392.176 272.012H120.3c-4.42 0-7.996-3.576-7.996-7.996s3.576-7.996 7.996-7.996h271.876c4.42 0 7.996 3.576 7.996 7.996s-3.576 7.996-7.996 7.996zM168.278 367.968H120.3c-4.42 0-7.996-3.576-7.996-7.996s3.576-7.998 7.996-7.998h47.976c4.42 0 7.998 3.578 7.998 7.998s-3.576 7.996-7.996 7.996zM437.654 367.968H200.264c-4.42 0-7.996-3.576-7.996-7.996s3.576-7.998 7.996-7.998h237.39c4.42 0 7.996 3.578 7.996 7.998s-3.576 7.996-7.996 7.996zM504.124 319.99H136.292c-4.42 0-7.996-3.576-7.996-7.996s3.576-7.996 7.996-7.996h367.832c4.42 0 7.996 3.576 7.996 7.996s-3.576 7.996-7.996 7.996zM424.16 415.946h-79.962c-4.42 0-7.996-3.576-7.996-7.996s3.576-7.998 7.996-7.998h79.962c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.996-7.998 7.996zM376.184 463.924H104.306c-4.42 0-7.996-3.576-7.996-7.996s3.576-7.996 7.996-7.996h271.876c4.42 0 7.996 3.576 7.996 7.996s-3.574 7.996-7.994 7.996zM264.234 559.888H104.306a8 8 0 0 1-7.996-7.996 7.982 7.982 0 0 1 7.996-7.998h159.928a7.982 7.982 0 0 1 7.996 7.998 8 8 0 0 1-7.996 7.996zM232.248 607.868H104.306a8.002 8.002 0 0 1-7.996-7.996 7.98 7.98 0 0 1 7.996-7.998h127.942c4.42 0 7.998 3.56 7.998 7.998a8.004 8.004 0 0 1-7.998 7.996zM376.184 511.902h-47.978c-4.42 0-7.996-3.576-7.996-7.996s3.576-7.996 7.996-7.996h47.978c4.42 0 7.996 3.576 7.996 7.996s-3.576 7.996-7.996 7.996zM296.218 511.902H120.3c-4.42 0-7.996-3.576-7.996-7.996s3.576-7.996 7.996-7.996h175.918c4.42 0 7.998 3.576 7.998 7.996s-3.578 7.996-7.998 7.996zM152.286 655.844H88.314a8 8 0 0 1-7.996-7.996 7.98 7.98 0 0 1 7.996-7.996h63.97a8 8 0 0 1 0.002 15.992zM312.212 415.946H120.3c-4.42 0-7.996-3.576-7.996-7.996s3.576-7.998 7.996-7.998h191.912c4.42 0 7.996 3.578 7.996 7.998s-3.576 7.996-7.996 7.996z" fill=""></path><path d="M647.606 815.772c-66.218 0-128.458-25.77-175.28-72.592-96.626-96.676-96.626-253.94 0-350.598 46.822-46.822 109.06-72.592 175.28-72.592s128.458 25.77 175.28 72.592c96.626 96.658 96.626 253.922 0 350.598-46.824 46.822-109.06 72.592-175.28 72.592z m0-479.79c-61.94 0-120.18 24.116-163.97 67.906-90.396 90.428-90.396 237.556 0 327.982 43.792 43.792 102.032 67.906 163.97 67.906 61.942 0 120.18-24.114 163.972-67.906 90.396-90.426 90.396-237.554 0-327.982-43.792-43.79-102.032-67.906-163.972-67.906z" fill=""></path><path d="M974.722 936.902a7.966 7.966 0 0 1-5.654-2.342l-153.774-153.742a7.992 7.992 0 0 1 0-11.306 7.992 7.992 0 0 1 11.306 0l153.774 153.742a7.992 7.992 0 0 1 0 11.306 7.954 7.954 0 0 1-5.652 2.342z" fill=""></path><path d="M1008.644 902.98a7.974 7.974 0 0 1-5.654-2.342l-153.774-153.742a7.992 7.992 0 0 1 0-11.306 7.992 7.992 0 0 1 11.306 0l153.774 153.742a7.992 7.992 0 0 1-5.652 13.648z" fill=""></path><path d="M991.684 943.9a31.96 31.96 0 0 1-22.616-9.34 7.992 7.992 0 0 1 0-11.306 7.992 7.992 0 0 1 11.306 0 15.99 15.99 0 0 0 22.616 0c6.232-6.248 6.232-16.398 0-22.616a7.992 7.992 0 0 1 0-11.306 7.992 7.992 0 0 1 11.306 0c12.464 12.462 12.464 32.766 0 45.228a31.936 31.936 0 0 1-22.612 9.34z" fill=""></path><path d="M648.058 671.836c-39.684 0-71.966-39.48-71.966-87.958 0-48.51 32.284-87.966 71.966-87.966 39.686 0 71.966 39.458 71.966 87.966 0.002 48.478-32.28 87.958-71.966 87.958z m0-159.934c-30.86 0-55.974 32.274-55.974 71.974 0 39.67 25.116 71.966 55.974 71.966 30.862 0 55.974-32.296 55.974-71.966 0.002-39.7-25.112-71.974-55.974-71.974z" fill=""></path><path d="M710.75 575.88h-125.38a8 8 0 0 1-7.996-7.996 7.98 7.98 0 0 1 7.996-7.996h125.38a7.982 7.982 0 0 1 7.996 7.996 8 8 0 0 1-7.996 7.996z" fill=""></path><path d="M648.058 671.836a8 8 0 0 1-7.996-7.996v-95.956c0-4.436 3.576-7.996 7.996-7.996s7.996 3.56 7.996 7.996v95.956a8 8 0 0 1-7.996 7.996zM664.05 495.91a7.968 7.968 0 0 1-5.652-2.344 7.992 7.992 0 0 1 0-11.306l31.984-31.986a7.994 7.994 0 0 1 11.308 0 7.994 7.994 0 0 1 0 11.308l-31.986 31.984a7.966 7.966 0 0 1-5.654 2.344zM632.066 495.91a7.972 7.972 0 0 1-5.654-2.344l-31.984-31.984c-3.124-3.124-3.124-8.184 0-11.308s8.184-3.124 11.306 0l31.984 31.986a7.992 7.992 0 0 1 0 11.306 7.96 7.96 0 0 1-5.652 2.344zM744.016 591.874h-15.992a8 8 0 0 1-7.998-7.996 7.98 7.98 0 0 1 7.998-7.996h15.992a7.982 7.982 0 0 1 7.996 7.996 8.002 8.002 0 0 1-7.996 7.996zM728.07 559.888c-0.218 0-0.406 0-0.546-0.032-4.406-0.282-7.764-4.06-7.482-8.464a7.972 7.972 0 0 1 7.326-7.466c1.076-0.686 8.652-6.652 8.652-40.02a7.99 7.99 0 0 1 7.996-7.996 7.992 7.992 0 0 1 7.996 7.996c0 25.84-4.374 43.02-12.994 51.11-4.608 4.342-9.06 4.872-10.948 4.872zM744.016 671.804a7.98 7.98 0 0 1-7.996-7.996c0-35.764-8.7-40.042-8.792-40.074-4.296-0.094-7.544-3.032-7.824-7.434-0.282-4.406 3.714-8.152 8.122-8.434 1.326-0.188 6.356 0 11.494 4.84 8.622 8.09 12.994 25.27 12.994 51.102a7.984 7.984 0 0 1-7.998 7.996zM568.096 591.874h-15.992a8.002 8.002 0 0 1-7.998-7.996 7.982 7.982 0 0 1 7.998-7.996h15.992a7.98 7.98 0 0 1 7.996 7.996 8 8 0 0 1-7.996 7.996zM552.104 671.836a8 8 0 0 1-7.998-7.996c0-25.832 4.376-43.042 12.996-51.132 5.136-4.808 10.088-5.028 11.494-4.84a8.012 8.012 0 0 1 7.48 8.496 7.996 7.996 0 0 1-7.324 7.464c-1.078 0.656-8.652 6.622-8.652 40.012a8 8 0 0 1-7.996 7.996zM568.048 559.888c-1.89 0-6.342-0.532-10.948-4.842-8.622-8.09-12.996-25.3-12.996-51.124 0-4.42 3.578-7.996 7.998-7.996s7.996 3.576 7.996 7.996c0 35.758 8.7 40.036 8.792 40.066 4.358-0.094 7.542 3.032 7.824 7.466 0.282 4.404-3.716 8.152-8.122 8.434h-0.544z" fill=""></path><path d="M456.146 575.88a8 8 0 0 1-7.996-7.996c0-110.238 89.678-199.916 199.908-199.916 4.42 0 7.996 3.576 7.996 7.996s-3.576 7.996-7.996 7.996c-101.406 0-183.916 82.51-183.916 183.924a8 8 0 0 1-7.996 7.996z" fill=""></path></g></svg>
          <h2>Nocode  development</h2>
          <p> Offering expertise in no-code development tools and platforms to create robust web applications and websites without traditional programming. Services include rapid prototyping, UI/UX design, integration of third-party services, and deployment of scalable solutions. Ideal for clients seeking efficient and cost-effective digital solutions tailored to their specific needs. </p>
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default Services2;