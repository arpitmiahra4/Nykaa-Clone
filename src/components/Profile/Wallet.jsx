import { Box, Image,Text } from '@chakra-ui/react'
import React from 'react'

const Wallet = () => {
  return (
    <>
        <Box p="100px">
            <Box>
            <Box display="flex">
            <Image src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAArAC4DASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAABQYABAEDBwL/xAA7EAABAwMCAgUJBAsAAAAAAAABAgMEAAURBhIhMRM2UYGDFBUWMkFxkbGzByRh0SU1VnOCkqGlssHC/8QAGQEAAgMBAAAAAAAAAAAAAAAAAAECBAUD/8QAKhEAAQMCBAQGAwAAAAAAAAAAAQACEQMEEiExgRNBYaEUM0NRkbFxgtL/2gAMAwEAAhEDEQA/AO41Tn3W324ffZjLJxnapY3H3Dmarapnu22wTJcc4dQkBBxnBUoJz/WlOx6XvJYROU/CQ8+OkzIZ6VzjxySQcH3UwFftbSm+matV+ETA6nv9FHzqtuSdtnt02efYtLexv+Y8vhWD6Vzhw8htiD4rg/5rRLb1FBYL0u/wWWgQNy2AB8q8SfSGK/HYfv8ADS7IVtaR5LkqPcOX40K0KVMeVh3xO0/WOyv6PuUu4QpKbitK5MaSplS0pA3Yxx4cO2j1KbkPU9sYekx5Vvf25cWymOEdJ28gMmj1luKLta485CCgOpyUk8iCQR8QaCql5SEmtTjCTy5H4CG696pzvD+omjFu/V8b9yj5Cg+veqc7w/qJq4/PRa9OCa5jDUdJAPtOBgd5xQgNL7RjW6l5+mpL+0K4mfdWLYyollhSQ4QeHSK/IfM0wWD9NX2XfF8Y7OY0LPYPWUPf/s9lKFxt750/AcdG+ddZhdJPM5GE/wCWf4q6baoLdtt0eGz6rKAnPafae85NM6LTvn06FoynT1zb3GI7kR+FpcusFyTIt7clCpaGyVNDmOHwofoLqnB8T6iqurs0BqZJubccCW42oKXk9nZyzVLQXVOD4n1FUuSzncPwjuHOrZn3h07Ihfrd52tEmDv2F1I2qPIEEEd2QKCNu38QEQZ+m2JyEJCSrypsJXjkdpz2U11KS4Urk02YC0ETOc5HpBBS2ubellor0k2otHLZM1o7D+HDhWzztqH9mP7g3+VMFSmpG5YfSb8u/pLUqfqaTHWwzYERluJKelXNQsIz7cCitht3mm0RoO/eWkncociSST3ZJohUpKFS4xs4bWhomcp13JX/2Q=="/>
                <Text>
                    <Text fontSize="40" fontWeight="bold">
                    Nykaa Wallet
                    </Text>
                    <Text fontFamily="italics" mt="-5px">
                    A purse you can carry to shop Beauty.
                    </Text>
                </Text>
                </Box>
            </Box>
            <Box>
                <Box mt="15px" fontSize="15px">
                    <Text>Wallet Balanace</Text>
                    <Text color="#fc2779" fontSize="25px" fontStyle="italics"> ₹ 20</Text>
                </Box>
                <Box display="flex" justifyContent="space-between" mt="25px">
                    <Text fontWeight="bolder" fontFamily="helvetics">NYKAA CASH</Text>
                    <Text fontWeight="bolder" >₹ 0</Text>
                </Box>
                <Box display="flex" justifyContent="space-between" mt="25px">
                    <Text fontWeight="bolder" fontFamily="helvetics">REWARD POINTS</Text>
                    <Text fontWeight="bolder">₹ 20</Text>
                </Box>
            </Box>
            <Box mt="10px">
                <Image src="https://www.nykaa.com/media/wysiwyg/NykaaWallet/wallet_footer_banner_3.png"/>
            </Box>
        </Box>
    </>
  )
}

export default Wallet