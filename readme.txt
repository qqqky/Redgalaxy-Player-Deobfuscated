Disclaimer:
This is not the source code of RedGalaxy player.
This is an attempt to partially deobfuscate public (client-facing) code to make debugging easier for those, who might
be interested in learning more on how to setup a DRM-supporting media player.

Partial deobfuscation/reformatting of RedGalaxy Player.
Original files are added for reference.
Versions 2.3.7 and 2.4.0 are quite similar, so 2.4.0 original sources can usually be replaced with 2.3.7 (try it out).
This statement might not hold true for future versions.

Usage:
1. Enable local overrides on your browser (in Dev Tools):
    Dev Tools -> Sources -> Overrides -> check 'Enable Local Overrides'
2. Load the web page that uses RedGalaxy Player and find the original file:
    2.1 go to: Dev Tools -> Sources -> Page
    2.2 find the original RedGalaxy player file that was downloaded from the server.
        File name might look somewhat like: 'redgalaxy-player.min.js'
    2.3 Right-click on this file and choose 'Save for overrides' option from the drop-down menu.
3. Go back to to local overrides section:
    Dev Tools -> Sources -> Overrides
4. Open the saved original js file, replace its contents with contents from 'redgalaxy-player.partiallyDeobfuscated_2.3.7.js', save file.
5. Refresh the page and make sure your override is picked up by the browser successfully.
6. Happy debugging.
