# FileSaverService Extension for Nova

FileSaverService is meant to help automate post-save functionality

## Requirements:

1. Create this file `/usr/local/bin/novascripts`

2. Then change permissions to executable: `chmod +x /usr/local/bin/novascript`

3. Run this command to edit that file in Nova: `nova /usr/local/bin/novascript`

4. Add your script to that file ...

## Example of `novascripts`:

```sh

#!/bin/bash

echo "Hello world!"

```

## Extension Installation:

1. Open Nova.
2. Choose menu **Extensions** > **Extension Library...**
3. Search extension `FileSaverService`
5. Click **Install**.

## Usage:

Saving files automatically calls the shell script above.  The less "work" in that script, the faster it will execute.
