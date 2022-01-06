import React from "react"
import { Avatar } from "native-base"

interface UserAvatarProps {
  name: string
  image?: string
}

export function UserAvatar ({name, image}: UserAvatarProps) {
  return (
    <Avatar
      bg="green.500"
      source={image ? {uri: image} : undefined}
    >
      {name.charAt(0)}
    </Avatar>
  )
}
