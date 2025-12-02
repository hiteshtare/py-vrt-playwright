function grant_exec_permissions() {
  cd ..
  chmod -R a+x py-vrt-playwright-english
  cd py-vrt-playwright-english/
}

# ----------------------------- baseline ----------------------------- #
# Common step
  grant_exec_permissions

echo "*** *** *** *** *** *** BASELINE *** *** *** *** *** ***"
echo ">>> Running baseline"
npm run test:baseline
echo "baseline >> Completed successfully!"
echo "*** *** *** *** *** *** BASELINE *** *** *** *** *** ***"
# ----------------------------- baseline ----------------------------- #

# ----------------------------- compare ----------------------------- #
# Common step
  grant_exec_permissions

echo "####################### COMPARE #######################"
echo ">>> Running compare"
npm run test:compare
echo "compare >> Completed successfully!"
echo "####################### COMPARE #######################"
# ----------------------------- compare ----------------------------- #

echo "e2e for Bookstore: https://vrt.yssofindia.org/e2e/py-vrt-playwright-english/playwright-report/#"