## What's Changed

  ### ✨ New Features                                                                                                                                                                                                                                                                                                                                                                                                                               
   
  #### 🔄 Auto-Refresh on Connection Error                                                                                                                                                                                                                                                                                                                                                                                                          
  **PR [#579](https://github.com/immichFrame/ImmichFrame/pull/579) by @3rob3**

  When ImmichFrame can't reach your Immich server, the error screen now shows a pulsing message and automatically reloads the page every 30 seconds until the connection is restored. Previously the frame would just sit on the error screen indefinitely — now it recovers on its own as soon as your server comes back online.                                                                                                                   
   
  ---                                                                                                                                                                                                                                                                                                                                                                                                                                               
                  
  ### 📓 Documentation

  #### 📖 Major Rewrite: Frameo Installation Guide
  **PR [#593](https://github.com/immichFrame/ImmichFrame/pull/593) by @Torstein-Eide**
                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  The Frameo digital photo frame setup instructions have been completely rewritten from the ground up. The guide is now clearer, better structured, and includes new screenshots for both the default app and WebView setup flows — making it much easier to get ImmichFrame running on Frameo devices.                                                                                                                                             
                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  ---                                                                                                                                                                                                                                                                                                                                                                                                                                               
                  
  ### 🔨 Maintenance

  #### 🔧 Dependency Updates (ImmichFrame & Docusaurus)                                                                                                                                                                                                                                                                                                                                                                                             
  **PR [#624](https://github.com/immichFrame/ImmichFrame/pull/624) by @JW-CH**
                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  Frontend (`immichFrame.Web`) and documentation (`docs`) dependencies have been updated to their latest compatible versions.                                                                                                                                                                                        
   
  ---
  New Contributors
                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  - 🎉 @Torstein-Eide made their first contribution in #593 — welcome!
                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  ---             
  Full Changelog: https://github.com/immichFrame/ImmichFrame/compare/v1.0.32.0...v1.0.33.0