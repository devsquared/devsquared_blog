/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-42c229711756b8de0367.js"
  },
  {
    "url": "app-fb86c961acdd9d7e3e99.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-6343b08ae213af306e85.js"
  },
  {
    "url": "index.html",
    "revision": "2de644311759a13821121da3534906a0"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "99091da885500c67f0577a38cbe02c0a"
  },
  {
    "url": "component---src-pages-index-tsx.0e4338761429b4eb16ac.css"
  },
  {
    "url": "0-b30a221a2290d4d33c09.js"
  },
  {
    "url": "component---src-pages-index-tsx-db9f5e7b74a59a64cce8.js"
  },
  {
    "url": "static/d/72/path---index-6a9-M29NRNEDpvbpd9RYxnQhik7JeWU.json",
    "revision": "64ae2ad0119f353f807dac58dc20e55c"
  },
  {
    "url": "component---src-pages-404-tsx.0e4338761429b4eb16ac.css"
  },
  {
    "url": "component---src-pages-404-tsx-ff25afc45eb5e977fbee.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "8daa0102ac60ae7eea61032890058848"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});