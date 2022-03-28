```
docker build -t docker-tailscale-proxy .
```
Then
```
docker run -d -e "AUTHKEY=xxx" -e "EXITNODE=xxx" --network host docker-tailscale-proxy
```