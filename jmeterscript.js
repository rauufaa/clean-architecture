sudo echo "timestamp,container_id,container_name,cpu_usage,memory_usage" > podman_usage.csv
while true; do
   sudo podman stats --no-stream | awk 'NR>1 {print systime()","$1","$2","$3","$4}' >> podman_usage.csv
   sleep 5
done
