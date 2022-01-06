import React from "react"
import { Avatar } from "native-base"

interface UserAvatarProps {
  name: string
  image?: string
}

export function UserAvatar ({name, image}: UserAvatarProps) {
  return (
    <Avatar
      size="xl"
      bg="green.500"
      source={{uri: image}}
    >
      {name.charAt(0)}
    </Avatar>
  )
}
