import * as React from "react";
import { FunctionComponent } from "react";
import { IconButton } from "./icon";
import StreamController from "./stream-controller";
import VADetector from "./va-detector";

interface Props {
  stream: MediaStream;
  displayName: string;
  isVideoDisabled: boolean;
  isVideoMuted: boolean;
  isAudioMuted: boolean;
  onClickToggleAudioMuted: () => void;
  onClickToggleVideoMuted: () => void;
}
const SettingsStreamController: FunctionComponent<Props> = ({
  stream,
  displayName,
  isVideoDisabled,
  isVideoMuted,
  isAudioMuted,
  onClickToggleAudioMuted,
  onClickToggleVideoMuted
}: Props) => {
  const videoIcon = isVideoMuted ? "videocam_off" : "videocam";
  const audioIcon = isAudioMuted ? "mic_off" : "mic";

  return (
    <StreamController
      displayName={displayName}
      controllers={
        <>
          {isVideoDisabled ? null : (
            <IconButton
              name={videoIcon}
              title={isVideoMuted ? "Unmute" : "Mute"}
              onClick={() => onClickToggleVideoMuted()}
            />
          )}
          <IconButton
            name={audioIcon}
            title={isAudioMuted ? "Unmute" : "Mute"}
            onClick={() => onClickToggleAudioMuted()}
          />
          <VADetector stream={stream} />
        </>
      }
    />
  );
};

export default SettingsStreamController;