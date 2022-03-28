#!/bin/sh

tailscaled --tun=userspace-networking --socks5-server=localhost:1055
command='/usr/bin/tailscale up'

echo "Starting tailscale service"


#advertise-routes
if [[ -z "${ROUTE}" ]]; then
  echo "No Route set..."
else
  command="${command} --advertise-routes=${ROUTE}"
fi

if [[ -z "${AUTHKEY}" ]]; then
  echo "No Auth Key Specified"
else
  command="${command} --authkey=${AUTHKEY}"
fi

if [[ -z "${EXITNODE}" ]]; then
  echo "No Auth Key Specified"
else
  command="${command} --exit-node=${EXITNODE}"
fi


sleep 5 && eval $command 2>&1 &
/usr/bin/tailscaled
