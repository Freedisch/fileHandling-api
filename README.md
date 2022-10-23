
# Video Handling API

This is an API which allow to upload, download and stream a video

# NOTICE

Feel free to ask questions about this API / report bugs via GitHub Issues, etc! Documentation changes for pull requests are accepted as well.
Thanks ✅🧘
## Features

- Upload video
- Stream video
- Download video


## API Reference

#### Upload video

```bash
  POST /upload
```

#### Read the video

```bash
  GET /videos/:id
```
#### Download video

```bash
  GET /download/:id
```






## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`create a mongodb database you can use atlas for it`

`add the URL of your database inside the .env file`


## Deployment

To deploy this project run

```bash
  npm install
```

```bash
  nodemon index.js
```

