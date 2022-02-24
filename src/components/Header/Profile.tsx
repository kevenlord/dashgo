import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile(){
    return(
        <Flex align="center">
            <Box mr="4" textAlign="right">
                    <Text>Keven Reis</Text>
                    <Text color="gray.300" fontSize="small">kevenlord@hotmail.com</Text>
            </Box>
            
            <Avatar size="md" name="Keven Reis" src="http://github.com/kevenlord.png"/>
        </Flex>
    );
}