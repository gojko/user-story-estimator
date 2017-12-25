BUCKET=userstoryestimation.net
DIST_ID=EFMUBA4Z418D3
TS=`date +%Y%m%d%H%M%S`
BATCH='{"Paths": {"Quantity": 1,"Items": ["/index.html"]},"CallerReference": "CF invalidation '$TS'"}'

aws --profile gojko s3 sync site/ s3://$BUCKET --cache-control="max-age=86400" --acl public-read
aws --profile gojko cloudfront create-invalidation --invalidation-batch "$BATCH" --distribution-id $DIST_ID

echo check status using
echo aws cloudfront list-invalidations --distribution-id $DIST_ID \| grep "InProgress" -A 2
