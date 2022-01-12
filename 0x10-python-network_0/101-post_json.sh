#!/bin/bash
# post with json file
curl -sH "Content-Type: application/json" -X POST -d @"$2" "$1"
