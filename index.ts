import { serve } from "https://deno.land/std@0.150.0/http/server.ts";
import { Server } from "https://deno.land/x/socket_io@0.1.1/mod.ts";
import { updateUserData } from "./firebase.ts";

const io = new Server({
  cors: {
    allowedHeaders: "*",
    origin: "*",
  },
});
io.on("connection", (socket) => {
  // 用户离线
  socket.on("disconnect", () => {
    console.log("用户离线");
    updateUserData(
      {
        online: false,
        lastLoginTime: Date.now(),
      },
      socket.handshake.query.get("uid") as string
    );
  });
});

await serve(io.handler(), {
  port: 3000,
});
