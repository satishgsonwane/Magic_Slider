import io, { Socket } from "socket.io-client";
import { useEffect, useState } from "react";

import { Engines } from "@/types/graphql";
import { getVenueId } from "@/lib/oz-engine-api.helper";

export const useSocket = (engine: Engines) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const connectSocket = async () => {
      const ioSocket = await io("https://isproxy.ozapi.net", {
        path: `/${getVenueId(engine)}/manage/socket.io/`,
        // reconnectionDelayMax: 10000,
      });

      ioSocket.on("connect", () => {
        console.log("Connected to server");
        setSocket(ioSocket);
      });

      ioSocket.onAny((eventName, ...args) => {
        if (/to_studio\/.*/.test(eventName)) {
          console.log("to_studio.*", args);
        }
      });
    };

    connectSocket();

    return () => {
      socket && socket.disconnect();
    };
  }, []);

  return socket;
};
